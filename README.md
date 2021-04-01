# Shotstack NodeJS SDK

Node SDK for [Shotstack](https://shotstack.io), the cloud video editing API.

Shotstack is a cloud based video editing platform that enables the editing of videos using code.

The platform uses an API and a JSON format for specifying how videos should be edited and what assets and titles should be used.

A server based render farm takes care of rendering the videos allowing multiple videos to be created simultaneously.

For examples of how to use the SDK to create videos using code checkout the Node demo repo: https://github.com/shotstack/node-demos

---

- Installation
- Usage - basic example
- Configuration - config the client
  - Authentication
- Endpoints
  - Post a render
  - Get render status
- Editing a video
  - Creating a clip
    - Asset types
      - Video
      - Image
      - Title
      - HTML
      - Audio
      - Luma
    - Transition
    - Offset
    - Crop
  - Tracks
  - Timeline
    - Soundtrack
    - Fonts
- Video Output
  - Range
  - Thumbnail
  - Poster
- Edit
- Responses
  - Render queued
  - Render status

## Installation

```
npm install shotstack-sdk
```

## More Info

- [Getting Started Guide](https://shotstack.gitbook.io/docs/guides/getting-started)
- [API Reference](https://shotstack.io/docs/api/)
- [Examples](https://github.com/shotstack/node-demos)
- [Shotstack Website](https://shotstack.io)
