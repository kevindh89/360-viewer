# Tour setup documentation

All objects have a unique id that refers to a single instantion of the object called: "_id".

## Shared schemas

### Position

| Field | Type | Optional |
| ----- | ---- | -------- |
| x | String | false | 
| y | String | false | 
| z | String | false |

### Rotation

| Field | Type | Optional |
| ----- | ---- | -------- |
| x | String | false | 
| y | String | false | 
| z | String | false |

## Client

A client is the uppermost object that defines the owner of all underlying objects.

User login, payment and subscriptions are all directly related to a single client.


## Scene

A scene defines the static environment characteristics of the virtual realm.

By using HyperlinkObjects, a user can transfer from one Scene to another.

### Schema

| Field | Type | Optional |
| ----- | ---- | -------- |
| clientId | String (Client:_id) | false |
| initialScene | Boolean | true |
| properties | [Scene property] | false |

### Scene property schema

| Field | Type | Optional |
| ----- | ---- | -------- |
| type | String | false |
| file | String | false |
| previewFile | String | false |

Scene poperty __type__ can contain:
| sky | Defines the skybox image (i.e. "360-photos/hall.jpg") |


## HyperlinkObject

A hyperlink object defines an object in the scene that triggers transition to another scene or outside resource.

### Schema

| Field | Type | Optional |
| ----- | ---- | -------- |
| sceneId | String (Scene:_id) | false |
| position | Object (Position) | false|
| rotation | Object (Rotation) | true |
| label | Object | true | 
| onClickEvents | [Event] | false |
