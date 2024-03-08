import React from "react";

const map = {
  500: {
    margin: "80px",
    padding: 0
  },
  i500: {
    margin: 0,
    padding: "64px"
  },
  i600: {
    margin: 0,
    padding: "80px"
  },
}

const Spacer = ({
  size = "500"
}) => {
  const styles = map[size];
  return (
    <div style={{
      marginBottom: styles.margin,
      paddingBottom: styles.padding
    }}/>
  );
};

export default Spacer;
