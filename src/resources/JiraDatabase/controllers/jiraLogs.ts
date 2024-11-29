import { Request, Response } from "express";
import { AppDataSource } from "../../../data-source"; 
import { Logs } from "../../../entity/Logs"; 

export class JiraLogs {
    async getProfile(req: Request, res: Response) {
        try {
            // Validate and parse `obj` from the request body
            let message: object;
            if (typeof req.body === "string") {
              try {
                message = JSON.parse(req.body); // Try parsing if it's a string
              } catch (error) {
                return res.status(400).json({ error: "Invalid JSON format in 'obj'" });
              }
            } else if (typeof req.body === "object") {
              message = req.body; // Already a valid object
            } else {
              return res.status(400).json({ error: "'obj' must be a valid JSON object or string" });
            }
        
            // Create a new log entry 
            const logsRepository = AppDataSource.getRepository(Logs);
            const createLogs = logsRepository.create({ message });
            await logsRepository.save(createLogs);
        
            return res.status(200).json({ message: "Successfully saved the data" });
          } catch (error) {
            console.error("Error saving log:", error);
            return res.status(500).json({ error: "Internal server error" });
          }
    }
}