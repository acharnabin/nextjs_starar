This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## RULES TO BE MAINTAINED

1.  `pages` directory should not contain any `.js` files. those are the page routes.
2.  Always write modular scss code
3.  component ,svg, images should be imported dynamically using `next dynamic import`
4.  Global variables must be in capital letters
    exmaple :
    //global variables
    const [LOADING,SET_LOADING] = useState(false);
    const [ERROR,SET_ERROR] = useState(false);

        //local variables
        let temp=null;

5.Funtions should be in camelCase, it should describes what it does.
6.code should have proper comments.
7.every api end point should be listed in Apihelper/api_end_points.js file.
8.Must use bootstrap & material-ui for styling.

## FUNCTIONALITY ADDED

1. Redux toolkit setup
2. module scss style guide
3. private route example in the /pages/privatepage/index.js file
4. axios instance for making api calls
   5.mui & bootstrap integration

# FEATURES TO BE ADDED

1. Pwa
2. Error handling
3. Rtk query
4. firebase integration template
5. socket io integration template
6. graphql integration template
   8.cypress integration for testing
