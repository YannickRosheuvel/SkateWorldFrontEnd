import React, { useEffect} from 'react';

export function UserLoggedCheck() {

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
        }
      }, []);

return(
this.useEffect()
)
}
