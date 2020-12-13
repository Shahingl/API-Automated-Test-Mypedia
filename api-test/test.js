{
	"info": {
		"_postman_id": "9481497d-aeb7-41d9-aefb-50309b4bc517",
		"name": "Test",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "https://1k-dev.1kosmos.net/healthz",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "d18ddd7f-78ed-459d-a5f5-4bea593cc111",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});",
							"pm.test(\"Body matches string\", function () {",
							"    pm.expect(pm.response.text()).to.include(\"894bbc09c7ecde585a9adad626030500d6e5c498.1607487431366r\");",
							"});",
							"",
							"pm.test(\"Response time is less than 200ms\", function () {",
							"    pm.expect(pm.response.responseTime).to.be.below(5000);",
							"});",
							"pm.test(\"Status code name has string\", function () {",
							"    pm.response.to.have.status(\"OK\");",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "https://1k-dev.1kosmos.net/healthz",
					"protocol": "https",
					"host": [
						"1k-dev",
						"1kosmos",
						"net"
					],
					"path": [
						"healthz"
					]
				}
			},
			"response": []
		}
	]
}
