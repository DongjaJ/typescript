{
	class TimeoutError extends Error {}
	class OfflineError extends Error {}

	class NetworkClient {
		tryConnect(): void {
			throw new Error('no network!');
		}
	}

	class UserService {
		constructor(private client: NetworkClient) {}
		login() {
			this.client.tryConnect();
			//login..
		}
	}

	class App {
		constructor(private service: UserService) {}
		run() {
			try {
				this.service.login();
			} catch (e) {
				//show dialog to user
			}
		}
	}

	const client = new NetworkClient();
	const service = new UserService(client);
	const app = new App(service);
	app.run();
}
