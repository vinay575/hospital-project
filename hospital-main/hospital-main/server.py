#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

# Change to the project directory
os.chdir('/workspace/project')

# Set the port
PORT = 12000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        # Allow iframe embedding
        self.send_header('X-Frame-Options', 'ALLOWALL')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

if __name__ == "__main__":
    with socketserver.TCPServer(("0.0.0.0", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🌈 Children's Hospital website is running!")
        print(f"🏥 Server started at http://0.0.0.0:{PORT}")
        print(f"🌐 Access the website at: https://work-1-xwnwidmtolqeomeh.prod-runtime.all-hands.dev")
        print("✨ Press Ctrl+C to stop the server")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped by user")
            sys.exit(0)