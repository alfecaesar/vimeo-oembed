# Vimeo OEmbed API Proxy for Private Videos

This project provides a serverless API to fetch PRIVATE Vimeo video data using the [Vimeo oEmbed API](https://developer.vimeo.com/api/oembed) with an additional `Referer` header. This is useful for retrieving video metadata and embedding options when the Vimeo API requires the `Referer` to be sent along with the request.

## Features

- Fetch Vimeo video data using a custom serverless API.
- Proxy requests to Vimeo's oEmbed API with `Referer` headers.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14+ recommended).
- [Vercel account](https://vercel.com/) (for deployment).


## Setup Instructions

Follow these steps to set up the project locally and deploy it to Vercel.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/vimeo-oembed-api-proxy.git
cd vimeo-oembed-api-proxy
```

### Test the API

- https://vimeo-oembed-j2k80zcwj-alfe-caesar-lagas-projects-2e809126.vercel.app/api/vimeo-oembed?url={vimeo_url}&referer={referer/whitelist_url}


### Sample Response

```json
{
    "type": "video",
    "version": "1.0",
    "provider_name": "Vimeo",
    "provider_url": "https://vimeo.com/",
    "title": "####",
    "author_name": "BushWrapz",
    "author_url": "https://vimeo.com/####",
    "is_plus": "0",
    "account_type": "pro",
    "html": "<iframe src="https://player.vimeo.com/video/####?app_id=####" width="426" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="####"></iframe>",
    "width": 426,
    "height": 240,
    "duration": 168,
    "description": "",
    "thumbnail_url": "####",
    "thumbnail_width": 295,
    "thumbnail_height": 166,
    "thumbnail_url_with_play_button": "####",
    "upload_date": "2024-06-18 23:28:07",
    "domain_status_code": 200,
    "video_id": ####,
    "uri": "/videos/####"
}
```
