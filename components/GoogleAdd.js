import React, { useEffect } from "react";

const GoogleAdd = ({slot_id}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle mx-auto"
      style={{
        display: "block",
        width: "100%",
        height: "50px",
      }}
      data-ad-client="ca-pub-9881670143684490"
      data-ad-slot={slot_id}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAdd;