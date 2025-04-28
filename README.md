# Radio Host Application

This is a standalone Python application for managing microphones, uploading MP3 files, and playing songs.

## Prerequisites

- **Python** (v3.8 or higher)
- **pip** (Python package manager)

## Getting Started

1. Clone the Repository:
   ```bash
   git clone <repository-url>
   cd radio-host-app/python-interface

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

pip install pyaudio requests

python app.py

Features
Select a microphone from the available input devices.
Upload MP3 files to a local or remote server.
Play selected songs directly from the interface.
Future Enhancements
Add recording functionality using the selected microphone.
Display song metadata (e.g., title, artist) using a library like mutagen.
Improve the UI with a modern framework like PyQt or Kivy.

Enhance the Python Interface: Now that the Python interface is the main focus, you can start building additional features. Here are some ideas:

Recording Feature: Add functionality to record audio using the selected microphone.
Song Metadata: Use a library like mutagen to display metadata (e.g., title, artist) for uploaded MP3 files.
Improved UI: Consider switching to a more modern GUI framework like PyQt or Kivy for a better user experience.
Commit the Changes: After making these changes, commit them to your repository:

git add .
git commit -m "Transitioned to Python interface as the main application"
git push origin main

Got it! If you're scrapping the backend and frontend for now and focusing entirely on the **Python interface**, here's how you can proceed:

---

### Steps to Transition Fully to the Python Interface

1. **Remove the Backend and Frontend Folders**:
   - Navigate to the root of your project directory.
   - Delete the `backend` and `frontend` folders:
     ```bash
     rm -rf backend frontend
     ```

2. **Update the Project Structure**:
   Your project structure will now look like this:
   ```
   radio-host-app/
   ├── python-interface/
   │   ├── app.py
   │   └── (other Python files, if needed)
   ├── README.md
   └── .gitignore
   ```

3. **Update the README.md**:
   Modify the README.md to reflect the new focus on the Python interface. Here's an example:

   ```markdown
   # Radio Host Application

   This is a standalone Python application for managing microphones, uploading MP3 files, and playing songs.

   ## Prerequisites

   - **Python** (v3.8 or higher)
   - **pip** (Python package manager)

   ## Getting Started

   1. Clone the Repository:
      ```bash
      git clone <repository-url>
      cd radio-host-app/python-interface
      ```

   2. Create a Virtual Environment:
      ```bash
      python -m venv venv
      source venv/bin/activate  # On Windows: venv\Scripts\activate
      ```

   3. Install Dependencies:
      ```bash
      pip install pyaudio requests
      ```

   4. Run the Application:
      ```bash
      python app.py
      ```

   ## Features

   - Select a microphone from the available input devices.
   - Upload MP3 files to a local or remote server.
   - Play selected songs directly from the interface.

   ## Future Enhancements

   - Add recording functionality using the selected microphone.
   - Display song metadata (e.g., title, artist) using a library like `mutagen`.
   - Improve the UI with a modern framework like PyQt or Kivy.
   ```

4. **Enhance the Python Interface**:
   Now that the Python interface is the main focus, you can start building additional features. Here are some ideas:
   - **Recording Feature**: Add functionality to record audio using the selected microphone.
   - **Song Metadata**: Use a library like `mutagen` to display metadata (e.g., title, artist) for uploaded MP3 files.
   - **Improved UI**: Consider switching to a more modern GUI framework like **PyQt** or **Kivy** for a better user experience.

5. **Commit the Changes**:
   After making these changes, commit them to your repository:
   ```bash
   git add .
   git commit -m "Transitioned to Python interface as the main application"
   git push origin main
   ```

---

### Next Steps
Let me know if you'd like help with:
- Adding new features to the Python interface.
- Improving the UI with a different framework.
- Setting up a local file storage system for uploaded MP3s.

Happy coding! 🚀---

### Next Steps
Let me know if you'd like help with:
- Adding new features to the Python interface.
- Improving the UI with a different framework.
- Setting up a local file storage system for uploaded MP3s.

Happy coding! 🚀