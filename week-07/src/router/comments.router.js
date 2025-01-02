// 댓글 작성
router.post("/posts/:postId/comments", async (req, res) => {
  // 댓글 작성 로직
});

// 댓글 목록 조회
router.get("/posts/:postId/comments", async (req, res) => {
  // 댓글 목록 조회 로직
});

// 댓글 수정
router.patch("/posts/:postId/comments/:commentId", async (req, res) => {
  // 댓글 수정 로직
});

// 댓글 삭제
router.delete("/posts/:postId/comments/:commentId", async (req, res) => {
  // 댓글 삭제 로직
});
