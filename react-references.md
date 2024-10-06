```

URL: http://localhost:3000/project/:projectId/:abcd"

const pathParams = useParams();
console.log("pathParams", pathParams);

const {projectId, abcd } = useParams();
console.log("pathParams", pathParams);

URL:  http://localhost:3000/project/Ace%20of%20sports/sia?tab=iamatab&country=india&state=haryana

const [searchParams] = useSearchParams();
console.log("tab", searchParams.get("tab"));
console.log("country", searchParams.get("country"));
console.log("state", searchParams.get("state"));

```
