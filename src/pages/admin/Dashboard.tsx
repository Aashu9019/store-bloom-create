import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Star,
  Eye,
  Trash2,
  Edit,
  Search,
  LogOut,
  Shield,
  BarChart3,
  Settings
} from "lucide-react";

// Dummy data
const stats = {
  totalUsers: 12847,
  totalSuppliers: 3456,
  totalProducts: 45782,
  totalOrders: 8934,
  revenue: 234567.89
};

const recentUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", joinDate: "2024-01-15", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", joinDate: "2024-01-14", status: "active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", joinDate: "2024-01-13", status: "pending" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", joinDate: "2024-01-12", status: "active" },
];

const recentSuppliers = [
  { id: 1, name: "TechGlobal Co.", location: "Shenzhen, China", products: 245, rating: 4.8, status: "verified" },
  { id: 2, name: "WearTech Ltd.", location: "Guangzhou, China", products: 156, rating: 4.9, status: "verified" },
  { id: 3, name: "PowerSource Inc.", location: "Mumbai, India", products: 89, rating: 4.7, status: "pending" },
  { id: 4, name: "LightCraft Pro", location: "Istanbul, Turkey", products: 134, rating: 4.6, status: "verified" },
];

const recentProducts = [
  { id: 1, name: "Wireless Bluetooth Earbuds Pro", supplier: "TechGlobal Co.", price: "$12.50", status: "active", reviews: 2847 },
  { id: 2, name: "Smart Fitness Watch Series 6", supplier: "WearTech Ltd.", price: "$28.90", status: "active", reviews: 1856 },
  { id: 3, name: "Portable Power Bank 20000mAh", supplier: "PowerSource Inc.", price: "$8.75", status: "pending", reviews: 3421 },
  { id: 4, name: "LED Strip Lights RGB 16.4ft", supplier: "LightCraft Pro", price: "$6.20", status: "active", reviews: 987 },
];

const recentReviews = [
  { id: 1, product: "Wireless Bluetooth Earbuds Pro", user: "John Doe", rating: 5, comment: "Amazing sound quality!", date: "2024-01-15" },
  { id: 2, product: "Smart Fitness Watch Series 6", user: "Jane Smith", rating: 4, comment: "Great battery life", date: "2024-01-14" },
  { id: 3, product: "Portable Power Bank", user: "Bob Johnson", rating: 5, comment: "Fast charging and reliable", date: "2024-01-13" },
  { id: 4, product: "LED Strip Lights", user: "Alice Brown", rating: 4, comment: "Easy to install", date: "2024-01-12" },
];

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20">
      {/* Enhanced Header with gradient */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-secondary border-b shadow-medium">
        <div className="container py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-white/80">Manage your dropshipping platform</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button 
                onClick={handleLogout}
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="gradient-card border-primary/10 shadow-medium hover:shadow-strong transition-smooth hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Users className="h-4 w-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-emerald-600 font-medium">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-primary/10 shadow-medium hover:shadow-strong transition-smooth hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Suppliers</CardTitle>
              <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Package className="h-4 w-4 text-purple-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSuppliers.toLocaleString()}</div>
              <p className="text-xs text-emerald-600 font-medium">+8% from last month</p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-primary/10 shadow-medium hover:shadow-strong transition-smooth hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 text-orange-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProducts.toLocaleString()}</div>
              <p className="text-xs text-emerald-600 font-medium">+23% from last month</p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-primary/10 shadow-medium hover:shadow-strong transition-smooth hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders</CardTitle>
              <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalOrders.toLocaleString()}</div>
              <p className="text-xs text-emerald-600 font-medium">+15% from last month</p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-primary/10 shadow-medium hover:shadow-strong transition-smooth hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-emerald-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.revenue.toLocaleString()}</div>
              <p className="text-xs text-emerald-600 font-medium">+18% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Management Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50 border border-primary/10 shadow-soft">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card className="gradient-card border-primary/10 shadow-medium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>User Management</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button>Add User</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Suppliers Tab */}
          <TabsContent value="suppliers">
            <Card className="gradient-card border-primary/10 shadow-medium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Supplier Management</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search suppliers..."
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button>Add Supplier</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentSuppliers.map((supplier) => (
                      <TableRow key={supplier.id}>
                        <TableCell className="font-medium">{supplier.name}</TableCell>
                        <TableCell>{supplier.location}</TableCell>
                        <TableCell>{supplier.products}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            {supplier.rating}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={supplier.status === 'verified' ? 'default' : 'secondary'}>
                            {supplier.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card className="gradient-card border-primary/10 shadow-medium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Product Management</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search products..."
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button>Add Product</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Reviews</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.supplier}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.reviews}</TableCell>
                        <TableCell>
                          <Badge variant={product.status === 'active' ? 'default' : 'secondary'}>
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card className="gradient-card border-primary/10 shadow-medium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Review Management</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search reviews..."
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Comment</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentReviews.map((review) => (
                      <TableRow key={review.id}>
                        <TableCell className="font-medium">{review.product}</TableCell>
                        <TableCell>{review.user}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            {review.rating}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs truncate">{review.comment}</TableCell>
                        <TableCell>{review.date}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;