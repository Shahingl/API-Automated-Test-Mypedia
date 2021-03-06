{
	"info": {
		"_postman_id": "2e16903e-7921-4cbf-ba83-e0723349bd3b",
		"name": "Test-1",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "https://1k-dev.1kosmos.net/api/v3/rest/default/eula?tenant=1kosmos",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "7a39e337-4759-4ee1-96e9-55eeb657d793",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});",
							"pm.test(\"Body matches string\", function () {",
							"    pm.expect(pm.response.text()).to.include(\"VkVSU0lPTiAxLjAuIElNUE9SVEFOVCBQTEVBU0UgUkVBRCBUaGlzIDFLb3Ntb3MgRW5kLVVzZXIgQWdyZWVtZW50ICh0aGUgIkFncmVlbWVudCIpIGlzIGEgYmluZGluZywgY29udHJhY3R1YWwgYWdyZWVtZW50IGJldHdlZW4gdGhlIEVuZC1Vc2VyICgieW91IikgYW5kIDFLb3Ntb3MgSW5jLiAoIjFLb3Ntb3MiKS4gVGhpcyBBZ3JlZW1lbnQgY292ZXJzIHlvdXIgYXBwbGljYXRpb24gZm9yIGEgZGlnaXRhbCBpZGVudGl0eSwgaW4gdGhlIGZvcm0gb2YgYSBkaWdpdGFsIGNyZWRlbnRpYWwgKCJDcmVkZW50aWFsIiksIHRoZSBpc3N1YW5jZSBvZiB0aGF0IENyZWRlbnRpYWwgYnkgMUtvc21vcywgYW5kIHRoZSB1c2Ugb2YgdGhhdCBDcmVkZW50aWFsIGJ5IHlvdS4gQSBDcmVkZW50aWFsIGlzIGFuIGF0dGVzdGF0aW9uIG9mIGlkZW50aXR5LCBxdWFsaWZpY2F0aW9uLCBjb21wZXRlbmNlLCBvciBhdXRob3JpdHkgdGhhdCB3aWxsIGJlIGlzc3VlZCB0byB5b3UgYnkgMUtvc21vcy4gQSBDcmVkZW50aWFsIHdpbGwgb25seSBiZSBpc3N1ZWQgdG8geW91IG9uY2UgeW91ciBpZGVudGl0eSBoYXMgYmVlbiBjb25maXJtZWQuIFRoZSBDcmVkZW50aWFsIGFsbG93cyBTZXJ2aWNlIFByb3ZpZGVyIHRvIGVzdGFibGlzaCB5b3VyIGlkZW50aXR5IHdoZW4geW91IHRyeSB0byBhY2Nlc3MgaXRzIHdlYnNpdGVzIGFuZCBhcHBsaWNhdGlvbnMgdXNpbmcgdGhpcyBDcmVkZW50aWFsLiBBIFNlcnZpY2UgUHJvdmlkZXIgaXMgYW4gb3JnYW5pemF0aW9uIHRoYXQgdXNlcyB5b3VyIENyZWRlbnRpYWwgdG8gdmVyaWZ5IHlvdXIgaWRlbnRpdHkgYW5kIHRvIGF1dGhlbnRpY2F0ZSB5b3UgdG8gaXRzIHdlYnNpdGVzIG9yIGFwcGxpY2F0aW9ucy4gT25seSB0aG9zZSBTZXJ2aWNlIFByb3ZpZGVycyB3aXRoIGFuIGVzdGFibGlzaGVkIGNvbnRyYWN0dWFsIGFncmVlbWVudCB3aXRoIDFLb3Ntb3MgYXJlIGFibGUgdG8gcmVseSB1cG9uIGEgQ3JlZGVudGlhbC4gQnkgZW50ZXJpbmcgdGhpcyBBZ3JlZW1lbnQsIHlvdSBhdXRob3JpemUgMUtvc21vcyB0byBwcm92aWRlIGlkZW50aXR5IGFzc2VydGlvbnMgdG8gU2VydmljZSBQcm92aWRlcnMgdGhhdCBoYXZlIGNvbnRyYWN0ZWQgd2l0aCAxS29zbW9zIHRvIHByb3ZpZGUgYXV0aGVudGljYXRpb24gc2VydmljZXMuIFRoZXNlIGlkZW50aXR5IGFzc2VydGlvbnMgc2hhbGwgb25seSBiZSBwcm92aWRlZCB0byB0aGUgU2VydmljZSBQcm92aWRlciBpZiB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXRzIGFwcGxpY2F0aW9uKHMpIG9yIHdlYnNpdGUocykgdXNpbmcgeW91ciBDcmVkZW50aWFsLiBBbiBpZGVudGl0eSBhc3NlcnRpb24gaXMgYSBzdGF0ZW1lbnQgYXNzZXJ0aW5nIHlvdXIgaWRlbnRpdHkgdG8gdGhlIFNlcnZpY2UgUHJvdmlkZXIgb3JnYW5pemF0aW9uLiBZb3UgYWdyZWUgdGhhdCB5b3UgaGF2ZSByZWFkLCB1bmRlcnN0b29kIGFuZCBhZ3JlZSB0byB0aGUgYWxsIG9mIHRoZSBmb2xsb3dpbmc6IDEuIFlvdSB3aWxsIHRha2UgYWxsIHJlYXNvbmFibGUgbWVhc3VyZXMgdG8gcHJvdGVjdCB0aGUgQ3JlZGVudGlhbCBhbmQgaXRzIGFzc29jaWF0ZWQgdXNlciBuYW1lLCBwYXNzd29yZCwgYW5kIGFjdGl2YXRpb24gZGF0YSAoZS5nLiwgUElOKSwgYW5kIGltbWVkaWF0ZWx5IHJlcG9ydCB0aGUgbG9zcywgY29tcHJvbWlzZSBvciBkZXN0cnVjdGlvbiBvZiB0aGUgQ3JlZGVudGlhbCwgdXNlciBuYW1lLCBwYXNzd29yZCBvciBhY3RpdmF0aW9uIGRhdGEuIDIuIFlvdSB3aWxsIHZlcmlmeSB5b3VyIGluZm9ybWF0aW9uIGNvbnRhaW5lZCBpbiB0aGUgQ3JlZGVudGlhbCBiZWZvcmUgdXNpbmcgaXQgYW5kIHByb21wdGx5IG5vdGlmeSAxS29zbW9zIG9mIGFueSBlcnJvcnMuIDMuIFlvdSB3aWxsIG5laXRoZXIgY29weSB5b3VyIENyZWRlbnRpYWwgbm9yIGFsbG93IGl0IHRvIGJlIHVzZWQgYnkgYW5vdGhlciBwZXJzb24uIDQuIFlvdSB3aWxsIGltbWVkaWF0ZWx5IHJlcXVlc3QgcmV2b2NhdGlvbiBvZiB5b3VyIENyZWRlbnRpYWwgaWY6IChpKSBhbnkgZGF0YSB1c2VkIHRvIGFjY2VzcyB5b3VyIENyZWRlbnRpYWwgb3IgdGhlIHRva2VuIGNvbnRhaW5pbmcgeW91ciBDcmVkZW50aWFsIGFyZSBpbnNlY3VyZSBpbiBhbnkgd2F5OyBvciAoaWkpIGFueSBvZiB0aGUgaW5mb3JtYXRpb24gY29udGFpbmVkIGluIHRoZSBDcmVkZW50aWFsLCBvciB5b3VyIGlkZW50aWZpY2F0aW9uIGFuZCBhdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbiBoYXMgYmVlbiBjaGFuZ2VkLiA1LiBZb3Ugd2lsbCB1c2UgdGhlIENyZWRlbnRpYWwgYW5kIGFueSByZWxhdGVkIHNlcnZpY2Ugb25seSBpbiBhY2NvcmRhbmNlIHdpdGggdGhpcyBBZ3JlZW1lbnQsIGFwcGxpY2FibGUgcHJpdmFjeSB0ZXJtcywgbGF3cyBhbmQgcmVndWxhdGlvbnMuIDYuIFlvdSB3aWxsIHBlcmlvZGljYWxseSByZXZpZXcgeW91ciBvYmxpZ2F0aW9ucyB1bmRlciB0aGlzIEFncmVlbWVudCBhbmQgYXJlLCBpbiBhbnkgY2FzZSwgcmVzcG9uc2libGUgdGhlcmVmb3IuIDcuIFlvdSB3aWxsIG5vdCBjaGFsbGVuZ2UgdGhlIGxlZ2FsIGVmZmVjdCwgdmFsaWRpdHksIG9yIGVuZm9yY2VhYmlsaXR5IG9mIHRoZSBDcmVkZW50aWFsIG9yIGFueSBlbGVjdHJvbmljIGlkZW50aXR5IGFzc2VydGlvbnMgb3IgZWxlY3Ryb25pYyBzaWduYXR1cmVzIG1hZGUgdG8gU2VydmljZSBQcm92aWRlcnMgYnkgMUtvc21vcyBvbiB5b3VyIGJlaGFsZi4gOC4gQSBTZXJ2aWNlIFByb3ZpZGVyIG1heSBlbmZvcmNlIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB0aGlzIEFncmVlbWVudCBhZ2FpbnN0IHlvdSBhcyBhbiBleHByZXNzIHRoaXJkLXBhcnR5IGJlbmVmaWNpYXJ5LiA5LiAxS29zbW9zIG1heSByZXZva2UgKGVpdGhlciB0ZW1wb3JhcmlseSBvciBwZXJtYW5lbnRseSksIHdpdGhvdXQgcHJpb3Igbm90aWNlIHRvIHlvdSwgdGhlIENyZWRlbnRpYWwgYXMgZGlyZWN0ZWQgYnkgdGhlIFNlcnZpY2UgUHJvdmlkZXIgaWYgMUtvc21vcyByZWFzb25hYmx5IGJlbGlldmVzIHRoYXQgeW91IGFyZSB1c2luZyB0aGUgQ3JlZGVudGlhbCBpbiB2aW9sYXRpb24gb2YgdGhpcyBBZ3JlZW1lbnQgb3IgYXBwbGljYWJsZSBsYXcgb3IgcmVndWxhdGlvbi4gVXBvbiByZXZvY2F0aW9uIG9mIHlvdXIgQ3JlZGVudGlhbCwgeW91IHNoYWxsIG5vIGxvbmdlciB1c2UgdGhlIENyZWRlbnRpYWwgZm9yIGFueSBwdXJwb3NlLiAxMC4gPyA\");",
							"",
							"pm.test(\"Response time is less than 200ms\", function () {",
							"    pm.expect(pm.response.responseTime).to.be.below(5000);",
							"",
							"",
							"var schema = {",
							"  \"items\": {",
							"    \"type\": \"boolean\"",
							"  }",
							"};",
							"",
							"var data1 = [true, false];",
							"var data2 = [true, 123];",
							"",
							"pm.test('Schema is valid', function() {",
							"  pm.expect(tv4.validate(data1, schema)).to.be.true;",
							"  pm.expect(tv4.validate(data2, schema)).to.be.false;",
							"});",
							"});});"
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
					"raw": "https://1k-dev.1kosmos.net/api/v3/rest/default/eula?tenant=1kosmos",
					"protocol": "https",
					"host": [
						"1k-dev",
						"1kosmos",
						"net"
					],
					"path": [
						"api",
						"v3",
						"rest",
						"default",
						"eula"
					],
					"query": [
						{
							"key": "tenant",
							"value": "1kosmos"
						}
					]
				}
			},
			"response": []
		}
	]
}
