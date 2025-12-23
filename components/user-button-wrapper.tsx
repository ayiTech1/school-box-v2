"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";

const UserButtonWrapper = () => {
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  );
};

export default UserButtonWrapper;
