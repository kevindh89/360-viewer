# Tour setup documentation

All objects have a unique id that refers to a single instantion stored under "_id".

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

### ViewerEvent

| Field | Type | Optional |
| ----- | ---- | -------- |
| type | String (ViewerEvent type) | false | 
| data | Object | false |

#### ViewerEvent type

| hyperlink | Defines it's a transition event to another scene or resource |
| animation | Defines it's an animation event |

## Client

A client is the uppermost object that defines the owner of all underlying objects.

User login, payment and subscriptions are all directly related to a single client.

### Schema

*TBD*

## Scene

A scene defines static characteristics of the virtual realm.

### Schema

| Field | Type | Optional |
| ----- | ---- | -------- |
| clientId | String *(Client._id)*  | false |
| initialScene | Boolean | true |
| properties | Array *(zero or more Scene properties)* | false |

#### Scene property schema

| Field | Type | Optional |
| ----- | ---- | -------- |
| type | String (Scene property type) | false |
| file | String | false |
| previewFile | String | false |

#### Scene property types

| sky | Defines the skybox image (i.e. "360-photos/hall.jpg") |


## HyperlinkObject

A hyperlink object defines an object in the scene that triggers transition to another scene or outside resource.

### Schema

| Field | Type | Optional |
| ----- | ---- | -------- |
| sceneId | String (Scene._id) | false |
| position | Object (Position) | false|
| rotation | Object (Rotation) | true |
| label | Object | true | 
| onClickEvents | Array (zero or more ViewerEvents) | false |
