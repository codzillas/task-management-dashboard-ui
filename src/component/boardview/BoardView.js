import { useParams, useSearchParams } from "react-router-dom";

function BoardView() {
  const pathParams = useParams();
  console.log("pathParams", pathParams);

  const [searchParams] = useSearchParams();
  console.log("tab", searchParams.get("tab"));
  console.log("country", searchParams.get("country"));
  console.log("state", searchParams.get("state"));
  // const projectId = searchParams.get("projectId"); // Access 'id' query parameter

  return <h1>Project: {pathParams.projectId}</h1>;
}

export default BoardView;
