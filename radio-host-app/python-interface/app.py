import tkinter as tk
from tkinter import filedialog, messagebox, Listbox
import pyaudio
import requests

class RadioHostApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Radio Host Interface")
        self.root.geometry("500x400")

        # Microphone Selection
        tk.Label(root, text="Select Microphone:").pack(pady=5)
        self.microphone_list = Listbox(root, height=5)
        self.microphone_list.pack(pady=5)
        self.load_microphones()

        # MP3 Upload
        tk.Button(root, text="Upload MP3", command=self.upload_mp3).pack(pady=10)
        self.song_list = Listbox(root, height=10)
        self.song_list.pack(pady=5)

        # Play Song
        tk.Button(root, text="Play Selected Song", command=self.play_song).pack(pady=10)

    def load_microphones(self):
        """Load available microphones (input devices)."""
        audio = pyaudio.PyAudio()
        for i in range(audio.get_device_count()):
            device = audio.get_device_info_by_index(i)
            # Check if the device is an input device
            if device['maxInputChannels'] > 0:
                self.microphone_list.insert(tk.END, device['name'])

    def upload_mp3(self):
        """Upload an MP3 file."""
        file_path = filedialog.askopenfilename(filetypes=[("MP3 Files", "*.mp3")])
        if file_path:
            # Simulate upload to backend
            try:
                with open(file_path, 'rb') as f:
                    response = requests.post("http://localhost:3000/api/upload", files={"file": f})
                if response.status_code == 200:
                    self.song_list.insert(tk.END, file_path.split("/")[-1])
                    messagebox.showinfo("Success", "MP3 uploaded successfully!")
                else:
                    messagebox.showerror("Error", "Failed to upload MP3.")
            except Exception as e:
                messagebox.showerror("Error", f"An error occurred: {e}")

    def play_song(self):
        """Play the selected song."""
        selected_song = self.song_list.get(tk.ACTIVE)
        if selected_song:
            messagebox.showinfo("Playing", f"Playing {selected_song}")
            # Add logic to play the song using a library like pygame or pydub

if __name__ == "__main__":
    root = tk.Tk()
    app = RadioHostApp(root)
    root.mainloop()