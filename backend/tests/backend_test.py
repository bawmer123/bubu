"""Backend verification tests after security hardening (ICMN & Partner site)."""
import os

import pytest
import requests
from dotenv import dotenv_values

frontend_env = dotenv_values("/app/frontend/.env")
base_url = os.environ.get("REACT_APP_BACKEND_URL") or frontend_env.get("REACT_APP_BACKEND_URL")
if not base_url:
    raise RuntimeError("REACT_APP_BACKEND_URL is missing")
BASE_URL = base_url.rstrip("/")
LOCAL_URL = "http://localhost:8001"


@pytest.fixture(scope="module")
def api_client():
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session


# Module: root API health
class TestRoot:
    def test_root_returns_hello_world(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/", timeout=30)
        assert r.status_code == 200, r.text[:300]
        assert r.json() == {"message": "Hello World"}

    def test_root_local(self, api_client):
        r = api_client.get(f"{LOCAL_URL}/api/", timeout=15)
        assert r.status_code == 200
        assert r.json()["message"] == "Hello World"


# Module: hardening - docs disabled (must be checked on internal port)
class TestDocsDisabled:
    @pytest.mark.parametrize("path", ["/docs", "/redoc", "/openapi.json"])
    def test_docs_404_local(self, api_client, path):
        r = api_client.get(f"{LOCAL_URL}{path}", timeout=15)
        assert r.status_code == 404, f"{path} -> {r.status_code}"


# Module: hardening - demo endpoints removed
class TestStatusRemoved:
    def test_get_status_404(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/status", timeout=30)
        assert r.status_code == 404, r.text[:200]

    def test_post_status_404(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/status", json={"client_name": "TEST_x"}, timeout=30)
        assert r.status_code == 404, r.text[:200]

    def test_get_status_404_local(self, api_client):
        assert api_client.get(f"{LOCAL_URL}/api/status", timeout=15).status_code == 404

    def test_post_status_404_local(self, api_client):
        assert api_client.post(f"{LOCAL_URL}/api/status", json={}, timeout=15).status_code == 404


# Module: CORS behaviour with allow_credentials=False
class TestCors:
    def test_cors_headers_no_credentials(self, api_client):
        r = api_client.options(
            f"{BASE_URL}/api/",
            headers={
                "Origin": "https://example.com",
                "Access-Control-Request-Method": "GET",
            },
            timeout=30,
        )
        assert r.status_code in (200, 204), r.status_code
        assert r.headers.get("access-control-allow-credentials") is None
        assert r.headers.get("access-control-allow-origin") is not None

    def test_unknown_api_route_404(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/does-not-exist", timeout=30)
        assert r.status_code == 404
