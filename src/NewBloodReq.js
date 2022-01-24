import * as React from 'react';
import Parse from 'parse/dist/parse.min.js';

export default function NewBloodReq () { 
    const getCurrentUser = async function () {
        const currentUser = await Parse.User.current();
        if (currentUser !== null) {
          
        }
        return currentUser;
      };
      
    return (
        <div>
        <h1>New Blood Request</h1>
        </div>
    );
};