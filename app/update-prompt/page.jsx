"use client";

import UpdatePrompt from "@components/UpdatePrompt";
import { Suspense } from "react";

const EditPrompt = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
};

export default EditPrompt;
