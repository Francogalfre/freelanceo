import React from "react";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  return <div>Project ID: {params.id}</div>;
};

export default ProjectDetails;
