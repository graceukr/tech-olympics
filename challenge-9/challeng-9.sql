SELECT Track.TrackId,
  Track.Name,
  Track.Milliseconds
FROM Track
  JOIN PlaylistTrack ON Track.TrackId = PlaylistTrack.TrackId
  JOIN Playlist ON Track.TrackId = Playlist.TrackId
  JOIN Genre on Track.GenreId = Genre.GenreId
WHERE Playlist.Name = 'Quick clips'
  AND (
    Genre.Name = 'dramatic'
    OR Genre.Name = 'suspenseful'
  );