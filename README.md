This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```



## RULES TO BE MAINTAINED
1. `pages` directory should not contain any `.js` files. those are the page routes.
2. Always write modular scss code
3. component ,svg, images should be imported dynamically using `next dynamic import`
4. Global variables must be in capital letters
        exmaple :
        //global variables
        const [LOADING,SET_LOADING] = useState(false);
        const [ERROR,SET_ERROR] = useState(false);

        //local variables
        let temp=null;

5.Funtions should be in camelCase, it should describes what it does.
6. code should have proper comments.

