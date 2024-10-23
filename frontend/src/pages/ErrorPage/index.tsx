import React from 'react';

interface ErrorPageProps {
  statusCode: number;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode }) => {
  return (
    <div>
      <h1>Error {statusCode}</h1>
      <p>Something went wrong!</p>
      <p>Error status: {statusCode}</p>
    </div>
  );
};
