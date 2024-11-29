import * as express from "express"; 
import { JiraLogs } from "../controllers/jiraLogs"; 
const Router = express.Router(); 
Router.post("/logs", (req, res) => {
    new JiraLogs().getProfile(req, res);
}); 

export { Router as jiraRouter };
