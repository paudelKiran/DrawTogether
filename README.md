# **DrawTogether**

## **Introduction**
Welcome to **DrawTogether**! This is a collaborative drawing application where multiple users can join and draw on a shared canvas in real-time. Whether you're an artist looking to collaborate, a teacher needing a virtual whiteboard, or just someone who loves to doodle with friends, DrawTogether is for you.

## **Features**
- **Real-time Collaboration**: Draw with friends and colleagues in real time.
- **Simple Interface**: User-friendly and intuitive drawing tools.
- **Multiple Brush Styles**: Various brush styles to choose from.
- **Layer Support**: Work with multiple layers to organize your artwork.
- **Export Options**: Save your creations in various formats.

## **Installation**
To get started with DrawTogether, follow these steps:

**Clone the Repository**:
```bash
git clone https://github.com/paudelKiran/DrawTogether.git
```
##  Install dependencies

**Frontend (Next.js)**:
Navigate to the frontend directory and install the dependencies:

```bash
cd board_frontend
npm install
```

**Backend (Express.js)**:
Navigate to the backend directory and install the dependencies:

```bash
cd ../board_backend
npm install
```

## **Run the application**

**Frontend**:
Start the frontend server:

```bash
cd board_frontend
npm run dev
```

**Backend**:
Start the backend server:

```bash
cd ../board_backend
npm start
```

The frontend should be running on `http://localhost:{frontend-port}`, and the backend should be running on `http://localhost:{backend-port}`.

### **Setting Up the Environment for Frontend**

1. **Create an `.env` file** in the `board_frontend` directory.
2. Add the following line to configure the Socket.IO URL for communication:
   
    ```env
    NEXT_PUBLIC_SOCKET_URL=http://localhost:{backend-port}
    ```

## **Contributing**
Feel free to fork this repository, open issues, and submit pull requests. Contributions are always welcome!

## **License**
This project is open source and available under the MIT License.

