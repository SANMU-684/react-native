import { exploreOnce } from "../../../services/exploreService";

export async function POST() {
  return Response.json(exploreOnce());
}
