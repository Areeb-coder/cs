"""
Parses all topics from src/data/all_topics.json and merges them with the exact
specifications in JMI_StudyHub_YouTube_Lecture_Map.md.
Creates src/data/videos_data.json and src/data/videos.ts.
"""

import json
from pathlib import Path

# Load all 93 syllabus topics
topics_file = Path("src/data/all_topics.json")
all_topics = json.loads(topics_file.read_text(encoding="utf-8"))

# The verified entries as documented in JMI_StudyHub_YouTube_Lecture_Map.md
# Table of verified entries:
# 1. DSA Queue as ADT, Queue operations, Linear queue, Circular queue, Priority queue, Deque, Queue applications
#    -> GeeksforGeeks 'WHAT IS QUEUE? | Queue Data Structures | DSA Course', ID: ypJwoz_SXTo, Complete coverage
# 2. DSA Concept of linked list, Singly linked list
#    -> GeeksforGeeks 'WHAT IS LINKED LIST? | Linked List Data Structures | DSA Course', ID: MCG7S2fGUeU, Complete coverage
# 3. DSA Tree traversal algorithms
#    -> GeeksforGeeks 'TREE PRACTICE PROBLEMS | Tree Traversal Algorithms | DSA Course', ID: 0lLmU-VqXzk, Complete coverage
# 4. DSA Sorting algorithms
#    -> GeeksforGeeks 'Sorting Algorithms Full Course | Bubble, Selection, Insertion Sort & More', ID: IsBMyMch0gw, Complete coverage
# 5. Discrete Math: Definition and properties of graphs, Directed and undirected graphs, Adjacency matrix, Incidence matrix
#    -> Dr. Gajendra Purohit 'Graph Theory | Overview & Basic Terminology Of Graph Theory', ID: HipVU5vz3Q8, Complete coverage
# 6. Engg Math III: Divergence of a vector field, Curl of a vector field, Irrotational and solenoidal vector fields
#    -> Dr. Gajendra Purohit 'Vector Calculus in English | Divergence and Curl of vector field | Irrotational & Solenoidal Vector', ID: Z7zTP0MADIA, Complete coverage
# 7. DBMS: Introduction and applications of DBMS
#    -> Gate Smashers 'Lec-1: DBMS Syllabus / Full DBMS for College/University Students', ID: kBdlM6hNDAE, Complete coverage
# 8. DBMS: ACID properties
#    -> Gate Smashers 'Lec-88: ACID Properties of a Transaction', ID: -GS0OxFJsYQ, Complete coverage

VERIFIED_MATCHES = {
  # Engg Math III
  "asb-301-u1-t1": { # 'Scalar & Vector Functions, Gradient, Divergence & Curl'
    "title": "Vector Calculus in English | Divergence and Curl of vector field | Irrotational & Solenoidal Vector",
    "channelName": "Dr. Gajendra Purohit",
    "youtubeVideoId": "Z7zTP0MADIA",
    "youtubeUrl": "https://www.youtube.com/watch?v=Z7zTP0MADIA",
    "coverage": "complete"
  },
  # Discrete Mathematics
  "dsc-301-u2-t1": { # 'Directed & Undirected Graphs, Degree Sequence'
    "title": "Graph Theory | Overview & Basic Terminology Of Graph Theory",
    "channelName": "Dr. Gajendra Purohit",
    "youtubeVideoId": "HipVU5vz3Q8",
    "youtubeUrl": "https://www.youtube.com/watch?v=HipVU5vz3Q8",
    "coverage": "complete"
  },
  "dsc-301-u2-t2": { # 'Cycles, Paths, Connectivity, Adjacency & Incidence Matrices'
    "title": "Graph Theory | Overview & Basic Terminology Of Graph Theory",
    "channelName": "Dr. Gajendra Purohit",
    "youtubeVideoId": "HipVU5vz3Q8",
    "youtubeUrl": "https://www.youtube.com/watch?v=HipVU5vz3Q8",
    "coverage": "complete"
  },
  # Data Structures
  "dsc-302-u2-t3": { # 'Queue ADT: Linear, Circular, Priority & Double-Ended Queues'
    "title": "WHAT IS QUEUE? | Queue Data Structures | DSA Course",
    "channelName": "GeeksforGeeks",
    "youtubeVideoId": "ypJwoz_SXTo",
    "youtubeUrl": "https://www.youtube.com/watch?v=ypJwoz_SXTo",
    "coverage": "complete"
  },
  "dsc-302-u3-t1": { # 'Singly & Doubly Linked Lists'
    "title": "WHAT IS LINKED LIST? | Linked List Data Structures | DSA Course",
    "channelName": "GeeksforGeeks",
    "youtubeVideoId": "MCG7S2fGUeU",
    "youtubeUrl": "https://www.youtube.com/watch?v=MCG7S2fGUeU",
    "coverage": "complete"
  },
  "dsc-302-u4-t1": { # 'Binary Trees, Traversals & Expression Trees'
    "title": "TREE PRACTICE PROBLEMS | Tree Traversal Algorithms | DSA Course",
    "channelName": "GeeksforGeeks",
    "youtubeVideoId": "0lLmU-VqXzk",
    "youtubeUrl": "https://www.youtube.com/watch?v=0lLmU-VqXzk",
    "coverage": "complete"
  },
  "dsc-302-u5-t3": { # 'Sorting Algorithms'
    "title": "Sorting Algorithms Full Course | Bubble, Selection, Insertion Sort & More",
    "channelName": "GeeksforGeeks",
    "youtubeVideoId": "IsBMyMch0gw",
    "youtubeUrl": "https://www.youtube.com/watch?v=IsBMyMch0gw",
    "coverage": "complete"
  },
  # DBMS
  "dsc-304-u1-t1": { # 'DBMS Applications, Data Independence & Architecture Levels'
    "title": "Lec-1: DBMS Syllabus / Full DBMS for College/University Students",
    "channelName": "Gate Smashers",
    "youtubeVideoId": "kBdlM6hNDAE",
    "youtubeUrl": "https://www.youtube.com/watch?v=kBdlM6hNDAE",
    "coverage": "complete"
  },
  "dsc-304-u4-t1": { # 'Transaction Processing & ACID Properties'
    "title": "Lec-88: ACID Properties of a Transaction",
    "channelName": "Gate Smashers",
    "youtubeVideoId": "-GS0OxFJsYQ",
    "youtubeUrl": "https://www.youtube.com/watch?v=-GS0OxFJsYQ",
    "coverage": "complete"
  }
}

video_records = []

for t in all_topics:
    t_id = t["id"]
    sub_id = t["subjectId"]
    unit_id = t["unitId"]
    unit_num = int(unit_id.split("-u")[1]) if "-u" in unit_id else 1
    title = t["title"]
    
    if t_id in VERIFIED_MATCHES:
        meta = VERIFIED_MATCHES[t_id]
        record = {
            "id": f"vid-{t_id}",
            "topicId": t_id,
            "subjectId": sub_id,
            "unitNumber": unit_num,
            "topicTitle": title,
            "status": "verified",
            "coverage": meta["coverage"],
            "source": "curated-research",
            "youtubeUrl": meta["youtubeUrl"],
            "youtubeVideoId": meta["youtubeVideoId"],
            "title": meta["title"],
            "channelName": meta["channelName"],
            "reviewNotes": "Verified authoritative curriculum match from JMI_StudyHub_YouTube_Lecture_Map.md"
        }
    else:
        # Search fallback as explicitly mandated: never fabricate a video URL
        q = f"{title} BTech lecture".replace(" ", "+")
        record = {
            "id": f"vid-{t_id}",
            "topicId": t_id,
            "subjectId": sub_id,
            "unitNumber": unit_num,
            "topicTitle": title,
            "status": "search-fallback",
            "coverage": "partial",
            "source": "curated-research",
            "searchQuery": f"{title} BTech lecture",
            "searchUrl": f"https://www.youtube.com/results?search_query={q}",
            "reviewNotes": "SEARCH-FALLBACK: Awaiting faculty review / specific video verification in admin queue."
        }
    video_records.append(record)

# Write output files
out_json = Path("src/data/videos_data.json")
out_json.write_text(json.dumps(video_records, indent=2), encoding="utf-8")
print(f"Generated {len(video_records)} video records ({sum(1 for v in video_records if v['status'] == 'verified')} verified, {sum(1 for v in video_records if v['status'] == 'search-fallback')} search-fallback).")

ts_content = """import { TopicVideo } from '@/types/video';
import rawVideos from './videos_data.json';

export const TOPIC_VIDEOS: TopicVideo[] = rawVideos as TopicVideo[];

export function getVideoForTopic(topicId: string): TopicVideo | undefined {
  return TOPIC_VIDEOS.find((v) => v.topicId === topicId);
}

export function getVerifiedVideos(): TopicVideo[] {
  return TOPIC_VIDEOS.filter((v) => v.status === 'verified');
}

export function getFallbackVideos(): TopicVideo[] {
  return TOPIC_VIDEOS.filter((v) => v.status === 'search-fallback');
}
"""

Path("src/data/videos.ts").write_text(ts_content, encoding="utf-8")
print("Wrote src/data/videos.ts successfully.")
