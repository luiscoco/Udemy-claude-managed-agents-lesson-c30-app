import { text, number, flag, list, object, hash, report, unique, safePath, type Lesson, type Input } from "./core";

// A focused local experiment derived from this lesson’s reviewed presentation.
export const lesson: Lesson = {
  number: 30,
  title: "Skills and Progressive Loading",
  description: "Specialist instructions do not need to be pasted into every system prompt. A skill packages that know-how as files, allowing the agent to load detailed guidance when a task calls for it.",
  concepts: ["Pin canonical skill versions", "Hash the authored bundle", "Configured does not mean read"],
  scope: "Verifies a local skill manifest and authored read observations; it does not upload or execute a provider skill. Each run starts from a fresh local seed. The run journal stores results, not production workflow state.",
  cases: [{"id": "0", "label": "Verify pinned instructions and reads", "input": {"version": "skver_demo1", "resolvedVersion": "skver_demo1", "readInstructions": true}, "expected": "passed", "checks": {"observedRead": true}}, {"id": "1", "label": "Reject a moving version alias", "input": {"version": "latest", "resolvedVersion": "skver_demo1", "readInstructions": false}, "expected": "rejected", "checks": {}}],
  async run(input) {

const version=text(input,"version"),resolved=text(input,"resolvedVersion");
if(!version.startsWith("skver_")||version!==resolved)return report("rejected","Expected a matching canonical skill version",{},["Reject a moving alias for the reviewed configuration"]);
const bundle={"SKILL.md":"Format field observations using the approved report template.","references/template.txt":"Habitat: ...\nObservation: ..."};
return report("passed","Separated authored, configured, and observed skill evidence",{version,manifest:Object.entries(bundle).map(([path,bytes])=>({path,sha256:hash(bytes)})),observedRead:flag(input,"readInstructions"),permissionsGrantedBySkill:false},["Hash authored files","Match the resolved canonical version","Keep a configured skill distinct from observed file reads"]);

  }
};
