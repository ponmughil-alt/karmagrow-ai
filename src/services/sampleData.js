// Pre-populated realistic OTT Viewer Dataset for CineSense AI

export const INITIAL_SAMPLE_VIEWERS = [
  // Cluster 1: The Binge Enthusiasts (High watch time, long sessions, high completion)
  { user_id: "U1001", watch_time_hours: 8.5, avg_session_mins: 74, visit_frequency_per_week: 5.8, completion_rate: 0.92, genre_diversity_score: 0.45, recency_days: 0.5, top_genres: ["Drama", "Thriller", "Sci-Fi"] },
  { user_id: "U1002", watch_time_hours: 9.2, avg_session_mins: 82, visit_frequency_per_week: 6.2, completion_rate: 0.95, genre_diversity_score: 0.38, recency_days: 0.2, top_genres: ["Drama", "Crime", "Mystery"] },
  { user_id: "U1003", watch_time_hours: 7.8, avg_session_mins: 68, visit_frequency_per_week: 5.2, completion_rate: 0.89, genre_diversity_score: 0.42, recency_days: 1.0, top_genres: ["Thriller", "Action", "Drama"] },
  { user_id: "U1004", watch_time_hours: 10.4, avg_session_mins: 95, visit_frequency_per_week: 6.8, completion_rate: 0.96, genre_diversity_score: 0.35, recency_days: 0.1, top_genres: ["Sci-Fi", "Drama"] },
  { user_id: "U1005", watch_time_hours: 8.1, avg_session_mins: 70, visit_frequency_per_week: 5.5, completion_rate: 0.91, genre_diversity_score: 0.40, recency_days: 0.8, top_genres: ["Drama", "Romance"] },
  
  // Cluster 2: The Casual Viewers (Short sessions, moderate frequency, quick watch)
  { user_id: "U1006", watch_time_hours: 2.1, avg_session_mins: 18, visit_frequency_per_week: 2.2, completion_rate: 0.55, genre_diversity_score: 0.65, recency_days: 3.5, top_genres: ["Comedy", "Animation", "Reality"] },
  { user_id: "U1007", watch_time_hours: 1.8, avg_session_mins: 15, visit_frequency_per_week: 2.0, completion_rate: 0.48, genre_diversity_score: 0.70, recency_days: 4.0, top_genres: ["Comedy", "Talk Show"] },
  { user_id: "U1008", watch_time_hours: 2.5, avg_session_mins: 22, visit_frequency_per_week: 2.8, completion_rate: 0.60, genre_diversity_score: 0.58, recency_days: 2.8, top_genres: ["Action", "Shorts", "Comedy"] },
  { user_id: "U1009", watch_time_hours: 1.4, avg_session_mins: 12, visit_frequency_per_week: 1.5, completion_rate: 0.42, genre_diversity_score: 0.75, recency_days: 5.2, top_genres: ["Comedy", "Variety"] },
  { user_id: "U1010", watch_time_hours: 2.8, avg_session_mins: 25, visit_frequency_per_week: 3.0, completion_rate: 0.58, genre_diversity_score: 0.60, recency_days: 2.1, top_genres: ["Animation", "Comedy"] },

  // Cluster 3: The Genre Explorers (High genre diversity, frequent discovery)
  { user_id: "U1011", watch_time_hours: 5.5, avg_session_mins: 42, visit_frequency_per_week: 4.5, completion_rate: 0.78, genre_diversity_score: 0.92, recency_days: 1.2, top_genres: ["Documentary", "Indie", "Foreign", "Sci-Fi", "Comedy"] },
  { user_id: "U1012", watch_time_hours: 6.0, avg_session_mins: 45, visit_frequency_per_week: 4.8, completion_rate: 0.81, genre_diversity_score: 0.88, recency_days: 0.9, top_genres: ["Anime", "Fantasy", "Historical", "Drama"] },
  { user_id: "U1013", watch_time_hours: 4.9, avg_session_mins: 38, visit_frequency_per_week: 4.1, completion_rate: 0.74, genre_diversity_score: 0.95, recency_days: 1.8, top_genres: ["Documentary", "Music", "Art", "Thriller"] },
  { user_id: "U1014", watch_time_hours: 5.8, avg_session_mins: 44, visit_frequency_per_week: 4.6, completion_rate: 0.79, genre_diversity_score: 0.90, recency_days: 1.0, top_genres: ["Sci-Fi", "Indie", "Horror", "Mystery"] },

  // Cluster 4: The Loyal Regulars (Frequent visits, consistent schedule)
  { user_id: "U1015", watch_time_hours: 6.2, avg_session_mins: 50, visit_frequency_per_week: 6.8, completion_rate: 0.88, genre_diversity_score: 0.50, recency_days: 0.2, top_genres: ["Sports", "News", "Reality", "Drama"] },
  { user_id: "U1016", watch_time_hours: 6.5, avg_session_mins: 52, visit_frequency_per_week: 7.0, completion_rate: 0.90, genre_diversity_score: 0.48, recency_days: 0.1, top_genres: ["Sports", "Daily Soap", "Comedy"] },
  { user_id: "U1017", watch_time_hours: 5.9, avg_session_mins: 48, visit_frequency_per_week: 6.5, completion_rate: 0.86, genre_diversity_score: 0.52, recency_days: 0.3, top_genres: ["News", "Sports", "Talk Show"] },

  // Cluster 5: The Night Owls / Specialists (Late night sessions, focused long format)
  { user_id: "U1018", watch_time_hours: 7.2, avg_session_mins: 90, visit_frequency_per_week: 3.5, completion_rate: 0.84, genre_diversity_score: 0.32, recency_days: 1.5, top_genres: ["Horror", "Dark Thriller", "Mystery"] },
  { user_id: "U1019", watch_time_hours: 6.8, avg_session_mins: 85, visit_frequency_per_week: 3.2, completion_rate: 0.82, genre_diversity_score: 0.30, recency_days: 2.0, top_genres: ["Sci-Fi", "Horror", "Cyberpunk"] },
  { user_id: "U1020", watch_time_hours: 7.5, avg_session_mins: 95, visit_frequency_per_week: 3.8, completion_rate: 0.87, genre_diversity_score: 0.35, recency_days: 1.1, top_genres: ["Crime", "True Crime", "Documentary"] }
];

export const SAMPLE_RECOMMENDATIONS_CATALOG = [
  {
    id: "REC-01",
    title: "Dark Horizon",
    category: "Thriller · Series",
    duration: "10 Episodes",
    matchScore: 96,
    targetSegment: "Binge Enthusiasts",
    reason: "High watch time + long session length + strong thriller preference.",
    imageBg: "linear-gradient(135deg, #193D32 0%, #3A2925 100%)",
    tag: "Trending #1"
  },
  {
    id: "REC-02",
    title: "The Silicon Experiment",
    category: "Sci-Fi · Movie",
    duration: "2h 15m",
    matchScore: 94,
    targetSegment: "Binge Enthusiasts",
    reason: "Long-form sci-fi narrative matching 90%+ completion historical profile.",
    imageBg: "linear-gradient(135deg, #3A2925 0%, #5E7567 100%)",
    tag: "Award Winner"
  },
  {
    id: "REC-03",
    title: "Quick Laughs: Season 4",
    category: "Comedy · Short Form",
    duration: "15m per ep",
    matchScore: 91,
    targetSegment: "Casual Viewers",
    reason: "Optimized for short session lengths (< 25 min) and high comedic affinity.",
    imageBg: "linear-gradient(135deg, #C9A85C 0%, #3A2925 100%)",
    tag: "Bite-Sized"
  },
  {
    id: "REC-04",
    title: "Uncharted Realms: Global Cinema",
    category: "Documentary · Cross-Genre",
    duration: "1h 45m",
    matchScore: 95,
    targetSegment: "Genre Explorers",
    reason: "High genre diversity score (0.92) triggers multi-cultural documentary highlight.",
    imageBg: "linear-gradient(135deg, #5E7567 0%, #193D32 100%)",
    tag: "Curated"
  },
  {
    id: "REC-05",
    title: "Matchday Live & Weekly Recap",
    category: "Sports · Daily",
    duration: "45m",
    matchScore: 93,
    targetSegment: "Loyal Regulars",
    reason: "Frequent active days (6+ visits/week) aligns with daily sports programming.",
    imageBg: "linear-gradient(135deg, #193D32 0%, #C9A85C 100%)",
    tag: "Daily Feature"
  },
  {
    id: "REC-06",
    title: "Midnight Chronicles",
    category: "Horror · Anthology",
    duration: "1h 10m",
    matchScore: 92,
    targetSegment: "Night Owls",
    reason: "Late night viewing window + deep thriller & mystery affinity.",
    imageBg: "linear-gradient(135deg, #3A2925 0%, #122e25 100%)",
    tag: "Late Night"
  }
];
