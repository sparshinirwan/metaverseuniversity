import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const GamifiedLearning = () => {
  const userStats = {
    points: 2485,
    level: 15,
    rank: 7,
    totalUsers: 12450
  };

  const badges = [
    { id: 1, name: "VR Pioneer", description: "Completed first VR course", icon: "🥽", earned: true },
    { id: 2, name: "AI Scholar", description: "Mastered 5 AI courses", icon: "🤖", earned: true },
    { id: 3, name: "Blockchain Expert", description: "Earned blockchain certification", icon: "⛓️", earned: true },
    { id: 4, name: "Global Collaborator", description: "Worked with 10+ international peers", icon: "🌍", earned: true },
    { id: 5, name: "Speed Learner", description: "Complete 3 courses in a week", icon: "⚡", earned: false },
    { id: 6, name: "Mentor", description: "Help 50+ students", icon: "👨‍🏫", earned: false }
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Chen", points: 5240, avatar: "👨‍💻" },
    { rank: 2, name: "Maria Santos", points: 4890, avatar: "👩‍🔬" },
    { rank: 3, name: "Yuki Tanaka", points: 4650, avatar: "👨‍🎓" },
    { rank: 4, name: "Ahmed Hassan", points: 3890, avatar: "👨‍💼" },
    { rank: 5, name: "Emma Wilson", points: 3420, avatar: "👩‍🎨" },
    { rank: 6, name: "David Kim", points: 2980, avatar: "👨‍🔬" },
    { rank: 7, name: "You", points: userStats.points, avatar: "⭐", isUser: true }
  ];

  const challenges = [
    { id: 1, title: "VR Physics Lab", points: 150, difficulty: "Medium", timeLeft: "2 days", participants: 1240 },
    { id: 2, title: "AI Ethics Debate", points: 200, difficulty: "Hard", timeLeft: "5 days", participants: 890 },
    { id: 3, title: "Blockchain Project", points: 300, difficulty: "Expert", timeLeft: "1 week", participants: 456 }
  ];

  return (
    <section id="gamified" className="py-20 relative bg-gradient-to-br from-cosmic to-nebula">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gamified Learning
            <br />
            <span className="bg-aurora bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Level up your education with points, badges, and competitive challenges that make learning addictive.
          </p>
        </div>

        {/* User Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-neon bg-card/50 backdrop-blur-sm text-center glow-soft">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-neon-primary mb-2">{userStats.points.toLocaleString()}</div>
              <div className="text-muted-foreground">Total Points</div>
            </CardContent>
          </Card>
          <Card className="border-neon bg-card/50 backdrop-blur-sm text-center glow-soft">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-neon-secondary mb-2">Level {userStats.level}</div>
              <div className="text-muted-foreground">Current Level</div>
            </CardContent>
          </Card>
          <Card className="border-neon bg-card/50 backdrop-blur-sm text-center glow-soft">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-neon-tertiary mb-2">#{userStats.rank}</div>
              <div className="text-muted-foreground">Global Rank</div>
            </CardContent>
          </Card>
          <Card className="border-neon bg-card/50 backdrop-blur-sm text-center glow-soft">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-neon-primary mb-2">{userStats.totalUsers.toLocaleString()}</div>
              <div className="text-muted-foreground">Active Learners</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Badges Collection */}
          <Card className="border-neon bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-neon-primary flex items-center gap-2">
                🏆 Achievement Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge) => (
                  <div 
                    key={badge.id} 
                    className={`p-4 rounded-lg border text-center transition-all duration-300 ${
                      badge.earned 
                        ? 'border-neon-primary bg-gradient-to-br from-neon-primary/20 to-neon-secondary/20 glow-soft' 
                        : 'border-muted bg-muted/20 opacity-50'
                    }`}
                  >
                    <div className="text-2xl mb-2">{badge.icon}</div>
                    <div className={`font-semibold text-sm mb-1 ${badge.earned ? 'text-neon-primary' : 'text-muted-foreground'}`}>
                      {badge.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{badge.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card className="border-neon bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-neon-primary flex items-center gap-2">
                🎯 Global Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div 
                    key={user.rank} 
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                      user.isUser 
                        ? 'bg-gradient-to-r from-neon-primary/20 to-neon-secondary/20 border border-neon-primary glow-soft' 
                        : 'bg-muted/20 hover:bg-muted/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        user.rank <= 3 ? 'bg-gradient-to-br from-neon-primary/30 to-neon-secondary/30 text-neon-primary' : 'bg-muted text-muted-foreground'
                      }`}>
                        {user.rank}
                      </div>
                      <div className="text-xl">{user.avatar}</div>
                      <div>
                        <div className={`font-semibold ${user.isUser ? 'text-neon-primary' : 'text-foreground'}`}>
                          {user.name}
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-neon-secondary">{user.points.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Challenges */}
          <Card className="border-neon bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-neon-primary flex items-center gap-2">
                ⚡ Active Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="p-4 rounded-lg bg-gradient-to-br from-neon-tertiary/10 to-neon-primary/10 border border-neon-tertiary/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-neon-primary">{challenge.title}</h4>
                      <Badge variant="outline" className="border-neon-secondary text-neon-secondary">
                        +{challenge.points} pts
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                      <span>Difficulty: {challenge.difficulty}</span>
                      <span>{challenge.participants} participants</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Ends in {challenge.timeLeft}</span>
                      <Button size="sm" className="bg-primary text-primary-foreground glow-primary hover:glow-secondary">
                        Join Challenge
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground glow-primary hover:glow-secondary px-8 py-4">
            Start Your Learning Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamifiedLearning;