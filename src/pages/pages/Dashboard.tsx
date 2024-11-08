import React from "react";
import { Calendar, momentLoaclizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLoaclizer(moment);

const Dashboard = React.memo(() =>(
    <>Dashboard</>
));

Dashboard.displayName ="Tracer_Dashboard";

export default Dashboard;