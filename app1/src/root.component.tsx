
// @ts-ignore
import {publicApiFunction}  from "@mfe/utils";

export default function Root(props) {
  return <section style={{margin: "80px"}} > {props.name} is mounted! Origem: {publicApiFunction()}</section>;
}
