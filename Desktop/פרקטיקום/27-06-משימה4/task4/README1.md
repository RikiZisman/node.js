

# Self-study task number 4 - Rivka Zisman

## Article #1: Central Workflow

### Comparing Git Workflows: What You Need to Know

#### Use Cases

**Centralized workflow**

- **Teams migrating from SVN:** Ideal for teams migrating from Subversion, as it uses a similar central repository model.
- **Small teams:** Suitable for small teams where conflict resolution can be easily managed.
- **Basic development:** Good for simple development processes without the need for complex branches.

**Advanced uses**

- **Development of large features:** Developers can work independently on large features without affecting the main project.
- **Conflict Management:** Strong conflict resolution with local commits and rebase.
- **Isolated environment:** Each developer has a local copy of the entire project, which allows independent work.

### Advantages and Disadvantages

**Centralized workflow**

- **Advantages**
  - **Simplicity:** Easy to understand and implement, especially for teams familiar with SVN.
  - **Independent work:** Developers can work independently and commit locally before pushing to the central repository.
  - **Linear history:** Rebase guarantees a linear commit history, making it easy to track changes.

- **Disadvantages**
  - **Scalability issues:** May become a bottleneck with larger teams due to conflict resolution overhead.
  - **Limited branches:** There is no set pull request or split pattern, which can limit collaboration in larger teams.

### Coding Examples

**Central repository initialization**

\`\`\`sh
ssh user@host git init --bare /path/to/repo.git
\`\`\`

**Cloning a central repository**

\`\`\`sh
git clone ssh://user@host/path/to/repo.git
\`\`\`

**Making changes and commit**

\`\`\`sh
git status
git add <some-file>
git commit
\`\`\`

**Pushing changes**

\`\`\`sh
git push origin main
\`\`\`

**Conflict management (rebase and resolution)**

\`\`\`sh
git pull --rebase origin main
git status
git add <some-file>
git rebase --continue
\`\`\`

### Alternatives

**Feature branch workflow**

- **Description:** Developing each feature in a dedicated branch to avoid interfering with the main branch.
- **Use case:** Teams that need to isolate feature development and maintain a stable master branch.
- **Advantages:** Maintains the stability of the main branch, supports parallel development.
- **Disadvantages:** Branch management is more complex.

**Gitflow workflow**

- **Description:** A strict branching model designed around releasing projects.
- **Use case:** Projects with a clear release schedule.
- **Advantages:** Defines specific roles for branches, supports continuous integration.
- **Cons:** Can be overkill for smaller projects.

**Forking workflow**

- **Description:** Each developer has a server-side public repository in addition to their local repository.
- **Use case:** Open source projects where multiple contributors work independently.
- **Advantages:** High level of isolation, support for large teams.
- **Disadvantages:** Managing multiple repositories can be complex.

### Screenshots

- Repository cloning
- Making changes
- Pushing changes
- Conflict resolution

### Summary

In this document, we have discussed various Git workflows, focusing on the core workflow with practical examples. Key points include:

- There is no one-size-fits-all solution: Choose a workflow that improves your team's productivity.
- Simplicity and efficiency: The workflow should be simple and suitable for business requirements.
- Adaptability: Be prepared to combine aspects of different workflows to suit your needs.

By understanding the pros and cons of each workflow, coding examples, and alternatives, teams can better decide on the most effective Git workflow for their projects.
"""



