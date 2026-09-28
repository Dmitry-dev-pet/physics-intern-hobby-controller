import { requireGitHubOidc, requirePost, sendError } from "../lib/auth.js";

export default async function handler(req, res) {
  try {
    requirePost(req);
    const payload = await requireGitHubOidc(req);
    res.status(200).json({
      ok: true,
      controller: "physics-intern-hobby",
      repository: payload.repository,
      workflowRef: payload.workflow_ref,
    });
  } catch (error) {
    sendError(res, error);
  }
}
