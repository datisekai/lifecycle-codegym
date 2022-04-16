import React, { useEffect, useState } from "react";

const ClockHook = () => {
  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  return date;
};

export default ClockHook;
