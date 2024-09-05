import redisClient from '../utils/redis';
// Import dbClient to interact with the database
import dbClient from '../utils/db';

class AppController {
	// This method handles GET requests to the /status route
  static getStatus(request, response) {
    response.status(200).json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }
 // It fetches the number of users and files in the database asynchronously
  static async getStats(request, response) {
    const usersNum = await dbClient.nbUsers();
    const filesNum = await dbClient.nbFiles();
    response.status(200).json({ users: usersNum, files: filesNum });
  }
}

module.exports = AppController;
