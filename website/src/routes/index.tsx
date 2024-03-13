import { useRoutes } from "react-router-dom";
import { AllProject, EntryRoads, alllessons } from "./entry";

export default function Path(){
    return useRoutes([EntryRoads,alllessons,AllProject])
}