import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Embedding, TimeDistributed
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import nltk

nltk.download('punkt_tab')
nltk.download('punkt')
nltk.download('stopwords')

# Sample conversation data
training_data = [
    ("hello", "Hi there!"),
    ("how are you?", "I'm fine, thank you."),
    ("what's your name?", "I am an AI chatbot."),
    ("goodbye", "Goodbye, take care!"),
]

# Preprocessing function
def preprocess_sentence(sentence):
    stop_words = set(stopwords.words('english'))
    words = word_tokenize(sentence.lower())
    return [word for word in words if word not in stop_words and word.isalnum()]

# Vocabulary and tokenization
vocab = set()
for pair in training_data:
    vocab.update(preprocess_sentence(pair[0]))
    vocab.update(preprocess_sentence(pair[1]))

word2idx = {word: i+1 for i, word in enumerate(vocab)}  # +1 to reserve index 0 for padding
idx2word = {i: word for word, i in word2idx.items()}
vocab_size = len(vocab) + 1  # Including padding

# Add "<UNK>" token to handle unknown words
word2idx = {word: i + 1 for i, word in enumerate(vocab)}
word2idx["<UNK>"] = len(word2idx) + 1
idx2word = {i: word for word, i in word2idx.items()}
vocab_size = len(word2idx) + 1  # Including padding and unknown token

# Convert sentences into sequences of integers
def encode_sentence(sentence):
    return [word2idx.get(word, word2idx["<UNK>"]) for word in preprocess_sentence(sentence)]

# Prepare data for training
input_sequences = [encode_sentence(input_text) for input_text, _ in training_data]
output_sequences = [encode_sentence(output_text) for _, output_text in training_data]

# Padding sequences
max_sequence_length = max(max(len(seq) for seq in input_sequences), max(len(seq) for seq in output_sequences))
input_sequences = tf.keras.preprocessing.sequence.pad_sequences(input_sequences, maxlen=max_sequence_length, padding='post')
output_sequences = tf.keras.preprocessing.sequence.pad_sequences(output_sequences, maxlen=max_sequence_length, padding='post')

# Define the model
model = Sequential()
model.add(Embedding(input_dim=vocab_size, output_dim=64, input_length=max_sequence_length))
model.add(LSTM(128, return_sequences=True))
model.add(TimeDistributed(Dense(vocab_size, activation='softmax')))

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')

# Train the model
model.fit(input_sequences, output_sequences, epochs=100)

# Function to generate response
def chatbot_response(user_input):
    user_input_seq = encode_sentence(user_input)
    user_input_seq = tf.keras.preprocessing.sequence.pad_sequences([user_input_seq], maxlen=max_sequence_length, padding='post')
    predicted_seq = model.predict(user_input_seq)
    
    # Generate response only for words in the vocabulary
    predicted_words = [idx2word.get(np.argmax(token), "") for token in predicted_seq[0] if np.argmax(token) in idx2word]
    response = ' '.join(predicted_words).strip()
    return response

# Interaction loop
def chat():
    print("Start chatting! Type 'quit' to stop.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'quit':
            break
        response = chatbot_response(user_input)
        print(f"Chatbot: {response}")

if __name__ == "__main__":
    chat()






