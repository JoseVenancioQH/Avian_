using System;
using Avian.Core.DomainModelsAvian;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Avian.Data.Contexts
{
    public partial class AvianBAPContext : DbContext
    {

        public AvianBAPContext(DbContextOptions<AvianBAPContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Abagency> Abagency { get; set; }
        public virtual DbSet<AbagencyCatlogs> AbagencyCatlogs { get; set; }
        public virtual DbSet<AbagencyMigrate> AbagencyMigrate { get; set; }
        public virtual DbSet<AbagencyProductWritten> AbagencyProductWritten { get; set; }
        public virtual DbSet<Abcarrier> Abcarrier { get; set; }
        public virtual DbSet<Abcatlogs> Abcatlogs { get; set; }
        public virtual DbSet<AbcatlogsProfile> AbcatlogsProfile { get; set; }
        public virtual DbSet<AbcontAut> AbcontAut { get; set; }
        public virtual DbSet<Abdocument> Abdocument { get; set; }
        public virtual DbSet<Abemail> Abemail { get; set; }
        public virtual DbSet<AbemailStatus> AbemailStatus { get; set; }
        public virtual DbSet<Ablog> Ablog { get; set; }
        public virtual DbSet<AbownerOfficer> AbownerOfficer { get; set; }
        public virtual DbSet<Abpermissions> Abpermissions { get; set; }
        public virtual DbSet<Abphone> Abphone { get; set; }
        public virtual DbSet<Abprofile> Abprofile { get; set; }
        public virtual DbSet<AbprofileUser> AbprofileUser { get; set; }
        public virtual DbSet<Abstate> Abstate { get; set; }
        public virtual DbSet<Abstatus> Abstatus { get; set; }
        public virtual DbSet<AbstatusChangeSet> AbstatusChangeSet { get; set; }
        public virtual DbSet<Abuser> Abuser { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=AvianBAP;persist security info=True;user id=;password=;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Abagency>(entity =>
            {
                entity.HasKey(e => e.AgencyId)
                    .HasName("PK_Agency");

                entity.ToTable("ABAgency");

                entity.Property(e => e.AgencyId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.AgencyAccountAccountNumber)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyAccountBankName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyAccountHoldersName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyAccountRoutingNumber)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyAuthorizedContcatIsCorrect).HasDefaultValueSql("((0))");

                entity.Property(e => e.AgencyAuthorizedContcatIsCorrectData)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyCity)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyGeneralDataIsCorrect).HasDefaultValueSql("((0))");

                entity.Property(e => e.AgencyGeneralDataIsCorrectData)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyOwnerOfficerisCorrect).HasDefaultValueSql("((0))");

                entity.Property(e => e.AgencyOwnerOfficerisCorrectData)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyRemarks).HasColumnType("text");

                entity.Property(e => e.AgencyRequestNumber).ValueGeneratedOnAdd();

                entity.Property(e => e.AgencyStatus).HasDefaultValueSql("(newid())");

                entity.Property(e => e.AgencyStreet)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyTin)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyTrustAccountIsCorrect).HasDefaultValueSql("((0))");

                entity.Property(e => e.AgencyTrustAccountIsCorrectData)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AgencyZip)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DateTimeCreate).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.DocumentGenerateStatus).HasDefaultValueSql("((0))");

                entity.Property(e => e.Token)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.AgencyStateNavigation)
                    .WithMany(p => p.Abagency)
                    .HasForeignKey(d => d.AgencyState)
                    .HasConstraintName("FK_ABAgency_ABState");

                entity.HasOne(d => d.AgencyStatusNavigation)
                    .WithMany(p => p.AbagencyAgencyStatusNavigation)
                    .HasForeignKey(d => d.AgencyStatus)
                    .HasConstraintName("FK_ABAgency_ABCatlogsStatus");

                entity.HasOne(d => d.AgencyTypeNavigation)
                    .WithMany(p => p.AbagencyAgencyTypeNavigation)
                    .HasForeignKey(d => d.AgencyType)
                    .HasConstraintName("FK_ABAgency_ABCatlogsTypeAgency");

                entity.HasOne(d => d.UserIdCreateNavigation)
                    .WithMany(p => p.AbagencyUserIdCreateNavigation)
                    .HasForeignKey(d => d.UserIdCreate)
                    .HasConstraintName("FK_ABAgency_ABUserCreate");

                entity.HasOne(d => d.UserIdModifyNavigation)
                    .WithMany(p => p.AbagencyUserIdModifyNavigation)
                    .HasForeignKey(d => d.UserIdModify)
                    .HasConstraintName("FK_ABAgency_ABUserModify");
            });

            modelBuilder.Entity<AbagencyCatlogs>(entity =>
            {
                entity.HasKey(e => e.AgencyCatlogsId);

                entity.ToTable("ABAgencyCatlogs");

                entity.Property(e => e.AgencyCatlogsId).ValueGeneratedNever();
            });

            modelBuilder.Entity<AbagencyMigrate>(entity =>
            {
                entity.HasKey(e => e.AgencyMigrateId);

                entity.ToTable("ABAgencyMigrate");

                entity.Property(e => e.AgencyMigrateId).ValueGeneratedNever();

                entity.HasOne(d => d.Agency)
                    .WithMany(p => p.AbagencyMigrate)
                    .HasForeignKey(d => d.AgencyId)
                    .HasConstraintName("FK_ABAgency_ABAgencyMigrate");
            });

            modelBuilder.Entity<AbagencyProductWritten>(entity =>
            {
                entity.HasKey(e => e.ProductWrittenId)
                    .HasName("PK_AgencyProductWritten");

                entity.ToTable("ABAgencyProductWritten");

                entity.Property(e => e.ProductWrittenId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.ControlUpdate).HasDefaultValueSql("((1))");

                entity.Property(e => e.DateTimeUpdate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ProductWrittenAgencyOther)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ProductWrittenCatlogsName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.ProductWrittenAgency)
                    .WithMany(p => p.AbagencyProductWritten)
                    .HasForeignKey(d => d.ProductWrittenAgencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AgencyProductWritten_ABAgency");

                entity.HasOne(d => d.ProductWrittenCatlogs)
                    .WithMany(p => p.AbagencyProductWritten)
                    .HasForeignKey(d => d.ProductWrittenCatlogsId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AgencyProductWritten_ABCatlogs");
            });

            modelBuilder.Entity<Abcarrier>(entity =>
            {
                entity.HasKey(e => e.CarrierId);

                entity.ToTable("ABCarrier");

                entity.Property(e => e.CarrierId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.AgentName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AppointedSince).HasColumnType("date");

                entity.Property(e => e.CarrierName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ControlUpdate).HasDefaultValueSql("((1))");

                entity.Property(e => e.DateTimeUpdate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.Agency)
                    .WithMany(p => p.Abcarrier)
                    .HasForeignKey(d => d.AgencyId)
                    .HasConstraintName("FK_ABCarrier_ABAgency");
            });

            modelBuilder.Entity<Abcatlogs>(entity =>
            {
                entity.HasKey(e => e.CatlogsId);

                entity.ToTable("ABCatlogs");

                entity.Property(e => e.CatlogsId).ValueGeneratedNever();

                entity.Property(e => e.CatlogsName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CatlogsPrefix)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CatlogsType)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Show)
                    .HasColumnName("show")
                    .HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<AbcatlogsProfile>(entity =>
            {
                entity.HasKey(e => e.CatlogProfileId);

                entity.ToTable("ABCatlogsProfile");

                entity.Property(e => e.CatlogProfileId).ValueGeneratedNever();

                entity.HasOne(d => d.CatlogsIdPermissionsNavigation)
                    .WithMany(p => p.AbcatlogsProfileCatlogsIdPermissionsNavigation)
                    .HasForeignKey(d => d.CatlogsIdPermissions)
                    .HasConstraintName("FK_ABCatlogsProfile_ABPermissions");

                entity.HasOne(d => d.CatlogsIdProfileNavigation)
                    .WithMany(p => p.AbcatlogsProfileCatlogsIdProfileNavigation)
                    .HasForeignKey(d => d.CatlogsIdProfile)
                    .HasConstraintName("FK_ABCatlogsProfile_ABProfile");
            });

            modelBuilder.Entity<AbcontAut>(entity =>
            {
                entity.HasKey(e => e.ContAutId);

                entity.ToTable("ABContAut");

                entity.Property(e => e.ContAutId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.ControlUpdate).HasDefaultValueSql("((1))");

                entity.Property(e => e.DateTimeUpdate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MiddleName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Agency)
                    .WithMany(p => p.AbcontAut)
                    .HasForeignKey(d => d.AgencyId)
                    .HasConstraintName("FK_ABContAut_ABAgency");
            });

            modelBuilder.Entity<Abdocument>(entity =>
            {
                entity.HasKey(e => e.DocumentId);

                entity.ToTable("ABDocument");

                entity.Property(e => e.DocumentFile).HasColumnType("text");

                entity.HasOne(d => d.DocumentAgency)
                    .WithMany(p => p.Abdocument)
                    .HasForeignKey(d => d.DocumentAgencyId)
                    .HasConstraintName("FK_ABDocument_ABAgency");
            });

            modelBuilder.Entity<Abemail>(entity =>
            {
                entity.HasKey(e => e.EmailId);

                entity.ToTable("ABEmail");

                entity.Property(e => e.EmailId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.ControlUpdate).HasDefaultValueSql("((1))");

                entity.Property(e => e.DateTimeUpdate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Agency)
                    .WithMany(p => p.Abemail)
                    .HasForeignKey(d => d.AgencyId)
                    .HasConstraintName("FK_ABEmail_ABAgency");

                entity.HasOne(d => d.ContAu)
                    .WithMany(p => p.Abemail)
                    .HasForeignKey(d => d.ContAuId)
                    .HasConstraintName("FK_ABEmail_ABContAut");
            });

            modelBuilder.Entity<AbemailStatus>(entity =>
            {
                entity.HasKey(e => e.EmailStatusId);

                entity.ToTable("ABEmailStatus");

                entity.Property(e => e.EmailStatusId).ValueGeneratedNever();

                entity.Property(e => e.EmailCc).IsUnicode(false);

                entity.Property(e => e.EmailTo).IsUnicode(false);

                entity.HasOne(d => d.StatusCatlogs)
                    .WithMany(p => p.AbemailStatus)
                    .HasForeignKey(d => d.StatusCatlogsId)
                    .HasConstraintName("FK_ABEmailStatus_ABEmailStatusCatlogsId");
            });

            modelBuilder.Entity<Ablog>(entity =>
            {
                entity.HasKey(e => e.LogId);

                entity.ToTable("ABLog");

                entity.Property(e => e.LogId).ValueGeneratedNever();

                entity.Property(e => e.ContentLog).HasColumnType("text");
            });

            modelBuilder.Entity<AbownerOfficer>(entity =>
            {
                entity.HasKey(e => e.OwnerOfficerId);

                entity.ToTable("ABOwnerOfficer");

                entity.Property(e => e.OwnerOfficerId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.DateTimeUpdate).HasColumnType("datetime");

                entity.Property(e => e.Dob).HasColumnType("date");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.TaxId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Agency)
                    .WithMany(p => p.AbownerOfficer)
                    .HasForeignKey(d => d.AgencyId)
                    .HasConstraintName("FK_ABOwnerOfficer_ABAgency");
            });

            modelBuilder.Entity<Abpermissions>(entity =>
            {
                entity.HasKey(e => e.PermissionsId);

                entity.ToTable("ABPermissions");

                entity.Property(e => e.PermissionsId).ValueGeneratedNever();

                entity.Property(e => e.ControlUpdate).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.Catlogs)
                    .WithMany(p => p.Abpermissions)
                    .HasForeignKey(d => d.CatlogsId)
                    .HasConstraintName("FK_ABPermissions_ABCatlogs");

                entity.HasOne(d => d.Profile)
                    .WithMany(p => p.Abpermissions)
                    .HasForeignKey(d => d.ProfileId)
                    .HasConstraintName("FK_ABPermissions_ABProfile");
            });

            modelBuilder.Entity<Abphone>(entity =>
            {
                entity.HasKey(e => e.PhoneId);

                entity.ToTable("ABPhone");

                entity.Property(e => e.PhoneId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.ControlUpdate).HasDefaultValueSql("((1))");

                entity.Property(e => e.DateTimeUpdate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Phone)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Agency)
                    .WithMany(p => p.Abphone)
                    .HasForeignKey(d => d.AgencyId)
                    .HasConstraintName("FK_ABPhone_ABAgency");

                entity.HasOne(d => d.ContAu)
                    .WithMany(p => p.Abphone)
                    .HasForeignKey(d => d.ContAuId)
                    .HasConstraintName("FK_ABPhone_ABContAut");
            });

            modelBuilder.Entity<Abprofile>(entity =>
            {
                entity.HasKey(e => e.ProfileId)
                    .HasName("PK_ABProfile_1");

                entity.ToTable("ABProfile");

                entity.Property(e => e.ProfileId).ValueGeneratedNever();

                entity.Property(e => e.ProfileName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Catlogs)
                    .WithMany(p => p.Abprofile)
                    .HasForeignKey(d => d.CatlogsId)
                    .HasConstraintName("FK_ABProfile_ABCatlogs");

                entity.HasOne(d => d.ProfileUser)
                    .WithMany(p => p.Abprofile)
                    .HasForeignKey(d => d.ProfileUserId)
                    .HasConstraintName("FK_ABProfile_ABProfileUser");
            });

            modelBuilder.Entity<AbprofileUser>(entity =>
            {
                entity.HasKey(e => e.ProfileUserId)
                    .HasName("PK_ABprofile");

                entity.ToTable("ABProfileUser");

                entity.Property(e => e.ProfileUserId).ValueGeneratedNever();

                entity.Property(e => e.ControlUpdate).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AbprofileUser)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_ABprofileUser_ABuser");
            });

            modelBuilder.Entity<Abstate>(entity =>
            {
                entity.HasKey(e => e.StateId);

                entity.ToTable("ABState");

                entity.Property(e => e.StateId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.StateName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.StatePrefix)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Abstatus>(entity =>
            {
                entity.HasKey(e => e.StatusId);

                entity.ToTable("ABStatus");

                entity.Property(e => e.StatusId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.Status)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AbstatusChangeSet>(entity =>
            {
                entity.HasKey(e => e.StatusChangeSetId)
                    .HasName("PK_StatusChangeSet");

                entity.ToTable("ABStatusChangeSet");

                entity.Property(e => e.StatusChangeSetId).ValueGeneratedNever();

                entity.Property(e => e.DateTimeChangeSet)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.MailContent).HasColumnType("text");

                entity.HasOne(d => d.Agency)
                    .WithMany(p => p.AbstatusChangeSet)
                    .HasForeignKey(d => d.AgencyId)
                    .HasConstraintName("FK_StatusChangeSet_AgencyId");
            });

            modelBuilder.Entity<Abuser>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK_TblUser");

                entity.ToTable("ABUser");

                entity.Property(e => e.UserId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.ControlUpdate).HasDefaultValueSql("((1))");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Salt)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SendEmailDraft).HasDefaultValueSql("((0))");

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
