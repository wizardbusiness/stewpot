import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function RouterErrorPage() {
  // header nav
  const error = useRouteError();
  console.error(error);
  return (
    <div id='router-error-page'>
      <h1> Oh no! </h1>
      <p> Something happened </p>
      <p>
        <i>
          {
            isRouteErrorResponse(error) ? 
            (
              error.error?.message || error.statusText
            ) : 'Unknown Error' 
          }
        </i>
      </p>
    </div>
  )
}