SELECT Track.TrackId, Track.Name, t.Milliseconds
FROM Track t
JOIN Playlist p ON t.playlist_id = p.playlist_id

WHERE p.Name = 'Quick clips'
  AND (t.genre = 'dramatic' OR t.genre = 'suspenseful');