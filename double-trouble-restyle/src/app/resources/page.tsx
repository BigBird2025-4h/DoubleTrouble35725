export default function ResourcesPage() {
  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-6">
        <span className="text-punch-red">Resources</span>
      </h1>

      <p className="text-charcoal/80 max-w-2xl mb-10 font-medium">
        Tools and guides to help you build skills for FIRST Tech Challenge. By
        the way, hi Leo! 👋 I can see you reading this right now 😁
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* CAD */}
        <div className="paper-panel p-6">
          <h2 className="font-display text-base text-charcoal mb-3">
            CAD &amp; Design
          </h2>
          <ul className="text-punch-red space-y-2 text-sm font-medium">
            <li>• Onshape (3D Modeling)</li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCTvd5lUSLtTH8Qcd7Pl1nQg"
                className="text-steel-blue hover:text-punch-red underline"
              >
                Official Onshape YouTube Channel
              </a>
            </li>
          </ul>
        </div>

        {/* Software */}
        <div className="paper-panel p-6">
          <h2 className="font-display text-base text-charcoal mb-3">
            Software
          </h2>
          <ul className="text-steel-blue space-y-2 text-sm font-medium">
            <li>• Java and Kotlin</li>
            <li>
              <a
                href="https://github.com/alan412/LearnJavaForFTC/blob/master/LearnJavaForFTC.pdf"
                className="text-steel-blue hover:text-punch-red underline"
              >
                Learn Java for FTC (PDF)
              </a>
            </li>
            <li>
              <a
                href="https://www.codecademy.com/learn/learn-kotlin"
                className="text-steel-blue hover:text-punch-red underline"
              >
                Learn Kotlin (codecademy)
              </a>
            </li>
            <li>• Our custom pathing software (coming soon!)</li>
            <li>• Team Github</li>
            <li>
              <a
                href="https://github.com/orgs/Double-Trouble-FTC-35725"
                className="text-steel-blue hover:text-punch-red underline"
              >
                Team Github
              </a>
            </li>
          </ul>
        </div>

        {/* Strategy */}
        <div className="paper-panel p-6">
          <h2 className="font-display text-base text-charcoal mb-3">
            Competition Strategy
          </h2>
          <ul className="text-punch-red space-y-2 text-sm font-medium">
            <li>• Game manual analysis</li>
            <li>• Autonomous scoring planning</li>
            <li>• Driver practice routines</li>
          </ul>
        </div>

        {/* Learning links */}
        <div className="paper-panel p-6">
          <h2 className="font-display text-base text-charcoal mb-3">
            Learning Resources
          </h2>
          <ul className="text-steel-blue space-y-2 text-sm font-medium">
            <li>• Java for FTC</li>
            <li>
              <a
                href="https://github.com/alan412/LearnJavaForFTC/blob/master/LearnJavaForFTC.pdf"
                className="text-steel-blue hover:text-punch-red underline"
              >
                Learn Java for FTC (PDF)
              </a>
            </li>
            <li>• FTC Discord</li>
            <li>
              <a
                href="https://discord.com/invite/ftc"
                className="text-steel-blue hover:text-punch-red underline"
              >
                FTC Discord Server
              </a>
            </li>
            <li>• Best Youtube Resources</li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCTvd5lUSLtTH8Qcd7Pl1nQg"
                className="text-steel-blue hover:text-punch-red underline"
              >
                Official Onshape YouTube Channel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
