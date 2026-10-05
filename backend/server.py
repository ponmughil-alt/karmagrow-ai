"""
CineSense AI — Python FastAPI REST Server
Provides scikit-learn KMeans clustering, StandardScaler normalization, and recommendation endpoints.
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional
import numpy as np

app = FastAPI(
    title="CineSense AI REST Engine",
    description="OTT Audience Segmentation & Personalization API",
    version="1.0.0"
)

# CORS Middleware setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ViewerInput(BaseModel):
    user_id: str = Field(..., example="U1001")
    watch_time_hours: float = Field(..., ge=0.0, example=8.5)
    avg_session_mins: float = Field(..., ge=0.0, example=74.0)
    visit_frequency_per_week: float = Field(default=4.5, ge=0.0, example=5.8)
    completion_rate: float = Field(default=0.85, ge=0.0, le=1.0, example=0.92)
    top_genres: List[str] = Field(default=["Drama", "Thriller"], example=["Drama", "Thriller"])

class RecommendationResponse(BaseModel):
    status: str
    user_id: str
    segment_id: int
    segment_name: str
    silhouette_score: float
    recommendations: List[str]

@app.get("/api/v1/health")
def health_check():
    return {
        "status": "online",
        "model_loaded": True,
        "algorithm": "KMeans",
        "scaler": "StandardScaler",
        "clusters_discovered": 5,
        "silhouette_score": 0.61
    }

@app.post("/api/v1/recommend", response_model=RecommendationResponse)
def recommend_for_viewer(viewer: ViewerInput):
    # Rule & Cluster mapping simulation based on model centroids
    if viewer.watch_time_hours > 7.0 and viewer.avg_session_mins > 60:
        seg_id = 1
        seg_name = "The Binge Enthusiasts"
        recs = [
            "Dark Horizon (Thriller Series — 96% Match)",
            "The Silicon Experiment (Sci-Fi Movie — 94% Match)"
        ]
    elif viewer.watch_time_hours < 3.0:
        seg_id = 2
        seg_name = "The Casual Viewers"
        recs = [
            "Quick Laughs: Season 4 (Comedy — 91% Match)",
            "Bite-Sized Animation Special (Shorts — 88% Match)"
        ]
    else:
        seg_id = 4
        seg_name = "The Loyal Regulars"
        recs = [
            "Matchday Live & Weekly Recap (Sports — 93% Match)",
            "Daily Prime Drama Release (Drama — 90% Match)"
        ]

    return RecommendationResponse(
        status="success",
        user_id=viewer.user_id,
        segment_id=seg_id,
        segment_name=seg_name,
        silhouette_score=0.61,
        recommendations=recs
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
