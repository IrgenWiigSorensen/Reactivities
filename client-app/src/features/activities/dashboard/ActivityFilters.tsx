import { observer } from "mobx-react-lite";
import { Header, Menu } from "semantic-ui-react";
// import { useStore } from "../../../app/stores/store";
import Calendar from "react-calendar";

export default observer(function ActivityFilters() {
  // const {
  //   activityStore: { predicate, setPredicate },
  // } = useStore();

  return (
    <>
      <Menu vertical size="large" style={{ width: "100%", marginTop: 26 }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item
          content="All Activites"
          // active={predicate.has("all")}
          // onClick={() => setPredicate("all", "true")}
        />
        <Menu.Item
          content="I'm going"
          // active={predicate.has("isGoing")}
          // onClick={() => setPredicate("isGoing", "true")}
        />
        <Menu.Item
          content="I'm hosting"
          // active={predicate.has("isHost")}
          // onClick={() => setPredicate("isHost", "true")}
        />
      </Menu>
      <Header />
      <Calendar
        // onChange={(date: any) => setPredicate("startDate", date as Date)}
      />
    </>
  );
});
