This is the frontend part of my portfolio website [samybahi.com](https://www.samybahi.com/).
It is coupled with a strapi backend that you can find [here](https://github.com/SamyBahi/samybahicom.api).

## Getting Started

- install packages :
```bash
npm install
```

- Make sure your strapi backend is up and running.
- Don't forget to setup the environment variables :
  - NEXT_PUBLIC_API_URL : the url to your strapi backend
  - API_KEY : the api key to connect to your strapi API
  - IMG_HOST : the hostname of your strapi backend (here for nextjs/image)
  - IMG_PATH : the path to the uploads of your strapi backend (here for nextjs/image again)

- start the development server :
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
