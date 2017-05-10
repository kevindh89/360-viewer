# Tour setup documentation

## Scene

A scene defines the static characteristics environment of the virtual realm.

### Schema

| Field | Type | Optional |
| ----- | ---- | -------- |
| clientId | String | false |
| initialScene | Boolean | true |
| properties | [Scene property] | false |

### Scene property schema

| Field | Type | Optional |
| ----- | ---- | -------- |
| type | String | false |
| file | String | false |
| previewFile | String | false |

Scene poperty __type__ can contain:
 * sky
