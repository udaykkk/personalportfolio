import React, { createContext, useState, useReducer } from "react";

export const MusicPlayerContext = createContext();

const musicPlayerReducer = (state, action) => {
  switch (action.type) {
    case "PLAY_TRACK":
      return {
        ...state,
        currentTrack: action.payload,
        isPlaying: true,
        currentIndex: action.index,
      };
    case "PAUSE":
      return { ...state, isPlaying: false };
    case "RESUME":
      return { ...state, isPlaying: true };
    case "NEXT_TRACK":
      const nextIndex = (state.currentIndex + 1) % state.playlist.length;
      return {
        ...state,
        currentTrack: state.playlist[nextIndex],
        currentIndex: nextIndex,
        isPlaying: true,
      };
    case "PREVIOUS_TRACK":
      const prevIndex =
        state.currentIndex === 0
          ? state.playlist.length - 1
          : state.currentIndex - 1;
      return {
        ...state,
        currentTrack: state.playlist[prevIndex],
        currentIndex: prevIndex,
        isPlaying: true,
      };
    case "SET_PLAYLIST":
      return { ...state, playlist: action.payload };
    default:
      return state;
  }
};

export const MusicPlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(musicPlayerReducer, {
    currentTrack: null,
    isPlaying: false,
    playlist: [],
    currentIndex: 0,
  });

  const playTrack = (track) => {
    const index = state.playlist.findIndex((t) => t.id === track.id);
    dispatch({ type: "PLAY_TRACK", payload: track, index });
  };

  const pauseTrack = () => {
    dispatch({ type: "PAUSE" });
  };

  const resumeTrack = () => {
    dispatch({ type: "RESUME" });
  };

  const nextTrack = () => {
    dispatch({ type: "NEXT_TRACK" });
  };

  const previousTrack = () => {
    dispatch({ type: "PREVIOUS_TRACK" });
  };

  const setPlaylist = (playlist) => {
    dispatch({ type: "SET_PLAYLIST", payload: playlist });
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        ...state,
        playTrack,
        pauseTrack,
        resumeTrack,
        nextTrack,
        previousTrack,
        setPlaylist,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
