# cda.search-engine

## For custom query retrieval with cloud server & local machines

Welcome to `cda.search-engine`, a private search engine project developed by David Cannan. This project integrates OAuth authentication for enhanced security and allows users to perform searches via a custom inference endpoint. It is uniquely set up to work with local machines through Tailscale's peer-to-peer networking, providing a seamless and secure search experience.

## Features

- OAuth integration with Google and GitHub for secure user authentication.
- Customizable inference endpoint, allowing searches on private or local data sources.
- Integration with Tailscale for secure, peer-to-peer network connectivity.
- Cloud server compatibility for robust, scalable deployment.

## Getting Started

### Prerequisites

- Cloud-hosted server (e.g., AWS EC2, DigitalOcean Droplet).
- Local machine for hosting the inference endpoint.
- Tailscale installed on both the server and local machine.
- OAuth credentials from Google and GitHub.

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Cdaprod/cda.search-engine.git
   cd cda.search-engine
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Set up your `.env` file with the necessary OAuth credentials and Tailscale endpoint configurations.

4. **Launch the Server:**
   ```bash
   node server.js
   ```

### How to Use

Navigate to the web interface hosted on your cloud server. Authenticate using Google or GitHub, set your custom inference endpoint, and start leveraging the power of your private search engine.

## Contributing

Your contributions make the open-source community an incredible place for growth and innovation. Contributions to enhance `cda.search-engine` are warmly welcomed.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/YourFeature`).
3. Commit your Changes (`git commit -m 'Add YourFeature'`).
4. Push to the Branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Contact

David Cannan - [@cdasmktcda](https://twitter.com/cdasmktcda)

Project Link: [https://github.com/Cdaprod/cda.search-engine](https://github.com/Cdaprod/cda.search-engine)

---

Feel free to adjust or extend the content as needed for your project's specifics. This README provides a comprehensive guide for users and potential contributors.