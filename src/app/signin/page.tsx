// src/app/signin/page.tsx
import React from "react";

export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
